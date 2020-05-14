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
  onSearchChange = (event) => {
      this.setState({searchfield: event.target.value});
  }

  // render
  render(){
    const filteredRobots = this.state.robots.filter(robots => {
      return (
        robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        || robots.email.toLowerCase().includes(this.state.searchfield.toLowerCase())
        )
    });
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
}

export default App;
