import React, { useState } from 'react';
import './Textform.css';
import {Buttons} from './Buttons.js';


export default function Textform(props) {
    const [text, settext] = useState("");
    const handleUPclick = () => {
        let newText = text.toUpperCase();
        settext(newText);
    }
    const handleOnchange = (event) => {
        settext(event.target.value)
    }
    const handleLOclick = () => {
        let newText = text.toLowerCase();
        settext(newText);
    }
    const reset = () => {
        settext("");
    }
    const handlecopy = () => {
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        console.log(text.value);
    }
    const removeextraspace = () => {
        let newText = text.split(/[ ]+/);
        settext(newText.join(" "));
    }
    /* const [myStyle, setmyStyle] = useState(
       {
           color: 'white',
           backgroundColor: 'black'
       });
   const [btntext, setbtntext] = useState("Enable Dark Mode");
   const togglestyle = () => {
       if (myStyle.color == 'black') {
           setmyStyle({
               color: 'white',
               backgroundColor: 'black'
           })
           setbtntext("Enable Dark Mode");
       }
       else {
           setmyStyle({
               color: 'black',
               backgroundColor: 'white'
           })
           setbtntext("Enable Light Mode");
       }
   }  */

    return (
        <>
            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <u className='titlecolor'><h1 className='titlecolor'>{props.title}</h1></u>
                <div className="my-3">
                    <label htmlFor="mybox" className="form-label">{props.heading}</label>
                    <textarea className="form-control" onChange={handleOnchange} value={text} id="mybox" rows="7"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUPclick}>Convert To Uppercase</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleLOclick}>Convert To Lowercase</button>
                    <button onClick={reset} className="btn btn-primary my-2 mx-2">Reset</button>
                    <button onClick={handlecopy} className="btn btn-primary my-3 mx-2">Copy Text</button>
                    <button onClick={removeextraspace} className="btn btn-primary my-3 mx-2">Remove Extra Space</button>
                    <Buttons />
                    {/* <div className="container">
                        <button onClick={togglestyle} type="button" class="btn btn-primary">{btntext}</button>
                    </div> */}
                    {/* <div class="form-check form-switch">
                        <input onClick={togglestyle} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">{btntext}</label>
                    </div> */}
                </div>
                <div className="container my-3">
                    <h5>{text.split('').filter((element) => { return element.length !== 0 }).length} Characters and {text.split(' ').filter((element) => { return element.length !== 0 }).length} Words</h5>
                    <h2>Your Text Preview Here</h2>
                    <p>{text}</p>
                </div>
            </div>

        </>
    );
}
