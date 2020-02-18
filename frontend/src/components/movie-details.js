import React, {Component} from 'react';

var FontAwesome = require('react-fontawesome');

class MovieDetails extends Component{

    render(){
        const currMovie = this.props.movie;

        return (
            <React.Fragment>
                { currMovie ? (
                    <div>
                        <h3>{currMovie.title}</h3>
                        <FontAwesome name="star"
                            className={currMovie.avg_rating > 0 ? 'orange' : ''}/>
                        <FontAwesome name="star"
                            className={currMovie.avg_rating > 1 ? 'orange' : ''}/>
                        <FontAwesome name="star"
                            className={currMovie.avg_rating > 2 ? 'orange' : ''}/>
                        <FontAwesome name="star"
                            className={currMovie.avg_rating > 3 ? 'orange' : ''}/>
                        <FontAwesome name="star"
                            className={currMovie.avg_rating > 4 ? 'orange' : ''}/>
                        ({currMovie.no_of_ratings})
                        <p>{currMovie.description}</p>
                    </div>
                ) : null}
            </React.Fragment>
        )
    }
}

export default MovieDetails;