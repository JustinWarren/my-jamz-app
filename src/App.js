import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FaChess } from 'react-icons/fa';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{"Hello!"}</h1>
        <h2>{"I am a React."}</h2>
        <button className="btn btn-danger">Submit</button>
        <h3> Lets play <FaChess />? </h3>
      </header>
    </div>
  );
}

export default App;
