import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetails from './components/movie-details';

class App extends Component {
  
  state = {
    movies: [],
    selectedMovie: null,
  }

  loadMovie = movie => {
    console.log(movie);
    this.setState({selectedMovie: movie})
  }
  
  movieDeleted = selectedMovie => {
    const movie = this.state.movies.filter(movie => movie.id !== selectedMovie.id);
    
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
              movieDeleted={this.movieDeleted} />

            <MovieDetails movie={this.state.selectedMovie}
              updateMovie={this.loadMovie}/>
          </div>
          
      </div>
    );
  }
}

export default App;
