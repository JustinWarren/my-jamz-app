import React, { Component } from 'react';
import './App.css';
import Songs from "./components/Songs.js" //This imports the Songs component from the components folder so that it can be used in App.js
import { FaChess } from 'react-icons/fa';  //This is how you import a FontAwesome icon to be used!


//render() is a lifecycle method - its required because it renders component in browser
//Need to use className attribute instead of class in JSX
class App extends Component {
  state = {
    songs: [{
      id: 1,
      title: "Billy Jean",
      artist: "Michael Jackson",
      length: "3:34"
    },
    {
      id: 2,
      title: "Gettin' Jiggy with It",
      artist: "Will Smith",
      length: "4:34"
    },
    {
      id: 2,
      title: "Happy",
      artist: "Pharrell",
      length: "5:25"
    }
  
    ]
  }
  
  render() {
    return (
      <div className="App">
        <Songs songs={this.state.songs}/>  {/*This is the format format for passing state to components*/}
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
