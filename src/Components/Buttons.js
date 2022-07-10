import React, { Component } from 'react';
import './Buttons.css';

export default class Buttons extends Component {
    label = 'Class Based Component';
    handlealert = () => {
        alert("You have clicked on class based component");
    }
    render() {
        return <div className='container-fluid'>
            <button id='btn' onClick={this.handlealert} className='btn btn-primary'>{this.label}</button>
        </div>;

    }

}
export { Buttons };