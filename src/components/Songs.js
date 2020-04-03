import React, { Component } from 'react';


//render() is a lifecycle method - its required because it
// renders component in browser
//Need to use className attribute instead of class in JSX
class Songs extends Component {
  render() {
    return (
      <div>
        <h1>My Jamz App</h1>
      </div>
    );
  }
  
}

export default Songs;
