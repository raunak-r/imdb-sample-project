import React from 'react';

function MovieList(props){
    

    return (
        <React.Fragment>
            {props.movies.map( movie => {
                return <h4 key={movie.id}>{movie.title}</h4>
            })}
        </React.Fragment>
    );
}

export default MovieList;
