import React, { Component } from 'react'
import './Movie.css'
import StarRatingComponent from 'react-star-rating-component';

export default class Movie extends Component {
    render() {
        return (
            <div>
                 <div className=" recherch">
            <input placeholder="     film .. series ..." onChange= {this.props.recherche}/>
            <button>recherch</button>
            <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        onStarClick={this.props.ratting}
                        // onStarClick={this.onStarClick.bind(this)}
                      />
        </div>
                
            </div>
        )
    }
}

