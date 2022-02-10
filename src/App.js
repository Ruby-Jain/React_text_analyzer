import './App.css';
import TextForm from './Components/Textform';
import Navbar from './Components/Navbar1';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light');
  const [btntext, setbtntext] = useState("Enable Dark Mode");
  const togglem = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      setbtntext("Enable Light Mode");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'gold';
      setbtntext("Enable Dark Mode");
    }
  }
  return (
    <>
      <Navbar title="Text Analyzer" aboutus="About-Us" btntext={btntext} mode={mode} togglem={togglem} />

      <div className="container my-5">
        <TextForm title="Text Analyzer" mode={mode} heading="Enter the text to Analyze" />
        
      </div>
    </>
  );
}

export default App;
