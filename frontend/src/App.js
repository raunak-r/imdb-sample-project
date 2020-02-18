import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movie-list';

class App extends Component {
  state = {
    movies: [],
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
          <MovieList movies = {this.state.movies}/>
      </div>
    );
  }
}

export default App;
