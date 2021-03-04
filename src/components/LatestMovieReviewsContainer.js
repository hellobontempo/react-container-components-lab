import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


// Code LatestMovieReviewsContainer Here

export default class LatestMovieReviewsContainer extends React.Component {

    state = {
        reviews: []
    }

    componentDidMount(){
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${process.env.REACT_APP_API_KEY}`)
        .then( r => r.json())
            .then( data => this.setState({reviews: data.results}))

    }

    render() {
        return (
            <div className="latest-movie-reviews">
                < MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}