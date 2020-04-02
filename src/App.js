import React, { Component } from 'react';
import './App.css';
import { FaChess } from 'react-icons/fa';  //This is how you import a FontAwesome icon to be used!


//render() is a lifecycle method - its required because it renders component in browser
//Need to use className attribute instead of class in JSX
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Jamz App</h1>
      </div>
    );
  }
  
}

//ANOTHER WAY TO WRITE IT
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>{"Hello!"}</h1>
//         <h2>{"I am a React."}</h2>
//         <button className="btn btn-danger">Submit</button>
//         <h3> Lets play <FaChess />? </h3>
//       </header>
//     </div>
//   );
// }

export default App;
