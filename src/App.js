import React, { Component } from 'react';
import './App.css';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
class App extends Component{
  // constructor
  constructor(){
    super();
    this.state = {
      robots: [],
      searchfield: '',
    }
  }
  //
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then (users => this.setState({robots: users}))
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
    if (this.state.robots.length === 0) return <h1 className="tc f1">Loading</h1>
    return (
      <div className='tc'>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots}/>
      </div>
    )
  }
}

export default App;
