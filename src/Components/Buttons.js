import React, { Component } from 'react';
import './Buttons.css';

export default class Buttons extends Component {
  label = 'Class Based Component';
  render() {
    const handlealert = () => {
      alert("You have clicked on class based component");
    }
    return <div className='container-fluid'>
      <button id='btn' onClick={handlealert} className='btn btn-primary'>{this.label}</button>
    </div>;
  }
}
export {Buttons};