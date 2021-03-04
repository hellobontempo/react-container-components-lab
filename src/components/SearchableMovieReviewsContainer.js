import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${process.env.REACT_APP_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends React.Component {

    state = {
        reviews: [],
        searchTerm: ""
    }
    
    // componentDidMount(){
    //     fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${process.env.REACT_APP_API_KEY}&query=${this.state.searchTerm}`)
    //         .then(resp => resp.json())
    //             .then(data => this.setState({reviews: data.results}))
    // }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${process.env.REACT_APP_API_KEY}&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
            .then(data => this.setState({reviews: data.results}))
    }

    render () {
        console.log(this.state)
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input onChange={(e)=> this.setState({searchTerm: e.target.value})} type="text"></input>
                </form>
                <div><MovieReviews reviews={this.state.reviews} /> </div>
            </div>
        )
    }
}