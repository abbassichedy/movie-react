import React from 'react'
import StarRatingComponent from 'react-star-rating-component';
import './Listfilm.css'
 const Listfilm = (props) => {
    return (
        <div className="liste-film">
            {/* {props.movies.filter((el=>el.name.includes(props.movies.filtre)))} */}
             {props.movies.filter((el,i)=>el.name.includes(props.filter)&&(el.rate>=props.rate)).map((el,i)=>(
                    
                    <div  className="liste">
            
                   
                
                <div className="boxcontinu">
                <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={el.rate}
                        // onStarClick={this.onStarClick.bind(this)}
                      />
                   
                <img src={el.picture}/>
                <span>{el.name}</span>
            
                     
                </div> 
                </div>
                  ))}
        </div>
    )
}
export default (Listfilm)
