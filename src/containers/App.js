import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js'

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
    const {robots, searchfield} = this.state;
    const filteredRobots = robots.filter(robot => {
      return (
        robot.name.toLowerCase().includes(searchfield.toLowerCase())
        || robot.email.toLowerCase().includes(searchfield.toLowerCase())
        )
    });
    return (!robots.length) ? <h1 className="tc f1">Loading</h1> :
      (
      <div className='tc'>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default App;
