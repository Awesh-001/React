import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas : [
       {name:"Ninja1", Version : "0.3" ,prop :"DEF"},
        { name:"Ninja2" ,Version : "0.4", prop : "GHI"},
        { name:"Ninja3" ,Version : "0.5", prop : "UKI"}
      
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>My first react app</h1>
        <p>welcome :) </p>
       <Ninjas ninjas = {this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
