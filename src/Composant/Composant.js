import React, { Component } from 'react'
import './Composant.css'

import Movie from '../Movie/Movie';
import Listfilm  from '../Listfilm/Listfilm';
import Modal from '../Modal/Modal';
import { PushSpinner } from "react-spinners-kit";

export default class Composant extends Component {
    constructor() {
        super();
        this.state ={
          film:[ {picture:"http://fr.web.img6.acsta.net/pictures/19/11/22/09/44/3027567.jpg",
            name:" bad boy", 
        rate:"3" }, 
            {picture:"https://img8.cdn.cinoche.com/images/0e26db421ea98abce3217692bfacdc74.jpg",
            name:" joumnji", 
        rate:"2" } 
            
        ],
        show: false,
        filter:"",
        rating:0,
        loading: true,
    }
      }
      Add=(namee,picturee,ratee)=>{
          this.setState({
              film:[...this.state.film,{picture:picturee ,name:namee, rate:ratee}]
          })
      }
      
        filterchange=(test)=>{
            this.setState({
                filter:test.target.value,
            })
        }
      componentDidMount=()=>{
          setTimeout(  ()=>{
              this.setState({
                  loading:false
              })
          },3000 )
      }
   
      showchange=(e)=>{
          
           this.setState({show:!e.target.value})
      }

        hidechange=()=>{
            this.setState({
                show:false
            })
        }
        onStarClick=(nextValue, prevValue, name) =>{
            this.setState({rating: nextValue});
          }
    render() {
        return (
            // <Movie/>
            <div className="boxfilm"> 
            { this.state.loading ?
            ( <PushSpinner size={30} color="#686769" loading={this.state.loading} />
            ):(
           <div> <Movie recherche={this.filterchange} ratting={this.onStarClick}/>
            <Listfilm movies={this.state.film} filter={this.state.filter} rate={this.state.rating}/>
            <Modal  add={this.Add}  show={this.state.show} hide={this.hidechange}/></div>
                )};
                  <div> 
                  <img className="imageadd" onClick={this.showchange}  src="https://img.icons8.com/nolan/96/add.png"/>
                      </div> 
         
            </div>
        )
                    
        
                
    }
}
