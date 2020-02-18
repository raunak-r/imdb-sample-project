import React, {Component} from 'react';

var FontAwesome = require('react-fontawesome');

class MovieDetails extends Component{

    state = {
        highlighted: -1,
    }

    highlightRate = high => evt => {
        this.setState({highlighted: high});
    }

    rateClicked = stars => evt => {
        fetch(`http://localhost:8000/api/movie/${this.props.movie.id}/rate_movie/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token fd27e19f8fbe59c15c434c48d2f4e9c02fc69ba4',
            },
            body: JSON.stringify({stars : stars + 1})
            }).then( resp => resp.json())
            .then(res => console.log(res))
            .catch(error => console.log(error))
    }

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

                        <div className="rate-container">
                            <h2>Rate it</h2>
                            {[...Array(5)].map((e, i) => {
                                return <FontAwesome key={i} name="star"
                                            className={this.state.highlighted > i - 1 ? 'purple' : ''}
                                            onMouseEnter={this.highlightRate(i)} onMouseLeave={this.highlightRate(-1)}
                                            onClick={this.rateClicked(i)}/>
                            } )}
                        </div>
                    </div>
                ) : null}
            </React.Fragment>
        )
    }
}

export default MovieDetails;