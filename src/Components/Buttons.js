import React, { Component } from 'react';
import './Buttons.css';

export default class Buttons extends Component {
    label='Class Based Component';
   

  render() {
    const handlealert=()=>{
        alert("You have clicked on class based component");
    }
    return <div>
       <button onClick={handlealert} className='cbcbtn'>{this.label}</button> 
    </div>;
  }
}
