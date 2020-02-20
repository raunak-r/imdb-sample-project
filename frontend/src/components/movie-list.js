import React from 'react';

var FontAwesome = require('react-fontawesome');

function MovieList(props){

    const movieClicked = movie => evt => {
        props.movieClicked(movie);
    };

    // a new way of writing. no "evt" present here.
    const removeClicked = movie => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movie/${movie.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token fd27e19f8fbe59c15c434c48d2f4e9c02fc69ba4',
            },
            }).then( resp => this.props.movieDeleted(movie))
            .catch(error => console.log(error))
    };

    return (
        <div>
            {props.movies.map( movie => {
                return (
                    <div key={movie.id}>
                        <h4 onClick={movieClicked(movie)}>
                            {movie.title}
                        </h4>
                        <FontAwesome name="edit"/>
                        <FontAwesome name="trash" onClick={() => removeClicked(movie)}/>
                    </div>
                )
            })}
        </div>
    );
}

export default MovieList;
