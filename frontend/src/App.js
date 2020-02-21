import React, {Component} from 'react'
import {withCookies} from 'react-cookie';

import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';

var FontAwesome = require('react-fontawesome');

class App extends Component {
  
  state = {
    movies: [],
    selectedMovie: null,
    editedMovie: null,
    loginToken: this.props.cookies.get('loginToken'),
  }

  loadMovie = movie => {
    console.log(movie);
    this.setState({selectedMovie: movie, editedMovie: null})
  }
  
  movieDeleted = selectedMovie => {
    const movie = this.state.movies.filter(movie => movie.id !== selectedMovie.id);
    // this.setState({movies: movies, selectedMovie: null})
  }

  editClicked = selectedMovie => {
    this.setState({editedMovie: selectedMovie});
  }

  newMovie = () => {
    this.setState({editedMovie: {title: '', description: ''}});
  }

  cancelForm = () => {
    this.setState({editedMovie: null});
  }

  addMovie = movie => {
    this.setState({movies: [...this.state.movies, movie]});
  }

  componentDidMount(){
    if (this.state.loginToken){
      fetch('http://localhost:8000/api/movie/', {
        method: 'GET',
        headers: {
          'Authorization' : `Token ${this.state.loginToken}`
        }
      }).then( resp => resp.json())
      .then(res => this.setState({movies: res}))
      .catch(error => console.log(error))
    }
    else{
      window.location.href = '/';
    }
  }

  render(){
    return (
      <div className="App">
          <h1><FontAwesome name="film"/>
            <span>Imdb-Sample-Project</span>
          </h1>

          <div className="layout">
            <MovieList movies = {this.state.movies}
                movieClicked={this.loadMovie}
                movieDeleted={this.movieDeleted} 
                editClicked={this.editClicked}
                newMovie={this.newMovie}
                token={this.state.loginToken} />
            <div>
              {!this.state.editedMovie ? 
                <MovieDetails movie={this.state.selectedMovie}
                updateMovie={this.loadMovie}
                token={this.state.loginToken} />
              : <MovieForm movie={this.state.editedMovie}
                    cancelForm={this.cancelForm}
                    newMovie={this.addMovie}
                    editedMovie={this.loadMovie}
                    token={this.state.loginToken} />}
            </div>
          </div>
          
      </div>
    );
  }
}

export default withCookies(App);
