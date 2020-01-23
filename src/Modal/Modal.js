import React, { Component } from 'react'

export default class Modal extends Component {
    constructor() {
        super()
        this.state = {
            inputpicture: "",
            inputname: "",
            inputrate: "",
           

        }
    }
    picturechange = (e) => {
        this.setState({ inputpicture: e.target.value })
    }
    namechange = (e) => {
        this.setState({ inputname: e.target.value })
    }
    
    inputratechange = (e) => {
        this.setState({ inputrate: e.target.value })
        
    }
    addfilmchange = () => {
        this.props.add(this.state.inputname,this.state.inputpicture,this.state.inputrate)
        //  film: [...this.state.film, { name: this.state.inputname, rate: this.state.inputrate }] }, this.setState({ inputname: "", imputpicture: "", imputrate: "" }))
    }
    render() {
        if(this.props.show){
        return (

           
                <div className="form-input">
                    <input placeholder="name of film" value={this.state.inputname} onChange={this.namechange}></input>
                    <input placeholder="picture of film" value={this.state.inputpicture} onChange={this.picturechange}></input>
                    <input placeholder="    rate " value={this.state.inputrate} onChange={this.inputratechange}></input>
                    <button onClick={()=>(this.addfilmchange() , this.props.hide())}>Add</button>

                </div>
                
            
        )
    } else return null}
}
