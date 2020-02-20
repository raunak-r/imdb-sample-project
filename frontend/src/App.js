import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';
import MovieForm from './components/movie-form';

class App extends Component {
  
  state = {
    movies: [],
    selectedMovie: null,
    editedMovie: null,
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
    fetch('http://localhost:8000/api/movie/', {
      method: 'GET',
      headers: {
        'Authorization' : 'Token fd27e19f8fbe59c15c434c48d2f4e9c02fc69ba4',
      }
    }).then( resp => resp.json())
    // .then(res => console.log(res))
    .then(res => this.setState({movies: res}))
    .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
          <h1>Imdb-Sample-Project</h1>

          <div className="layout">
            <MovieList movies = {this.state.movies}
                movieClicked={this.loadMovie}
                movieDeleted={this.movieDeleted} 
                editClicked={this.editClicked}
                newMovie={this.newMovie} />
            <div>
              {!this.state.editedMovie ? 
                <MovieDetails movie={this.state.selectedMovie}
                updateMovie={this.loadMovie}/>
              : <MovieForm movie={this.state.editedMovie}
                    cancelForm={this.cancelForm}
                    newMovie={this.addMovie}
                    editedMovie={this.loadMovie}/>}
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;
