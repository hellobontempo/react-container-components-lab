// Code MovieReviews Here

import React from 'react'

const MovieReviews = (props) => {
    console.log(props.reviews)
    return (
            <div className="review-list">
                {props.reviews.map( review =>{
                return (
                    <div className="review">
                        <h1>{review.display_title}</h1>
                        <p>{review.mpaa_rating}</p> 
                        <p>{review.headline}</p>
                    </div>
                    )})
                }

        
            </div>
        )
}

export default MovieReviews