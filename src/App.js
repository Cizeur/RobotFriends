import React, { Component } from 'react';
import {robots} from './robots.js';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';

class App extends Component{
  // constructor
  constructor(){
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    }
  }
  // function called on search change
  onSearchChange(event){
      console.log(event.target.value);
  }

  // render
  render(){
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={robots}/>
      </div>
    )
  }
}

export default App;
