import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardList from '../components/CardList.js';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js'

import { setSearchField } from '../action.js'


const mapStateToProps = state => {
    return {
      searchField: state.searchRobots.searchField
      //searchField: state.searchRobots.searchField
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component{
  // constructor
  constructor(){
    super();
    this.state = {
      robots: [],
    }
  }
  //
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then (users => this.setState({robots: users}))
  }

  // render
  render(){
    const {robots} = this.state;
    const { searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robot => {
      return (
        robot.name.toLowerCase().includes(searchField.toLowerCase())
        || robot.email.toLowerCase().includes(searchField.toLowerCase())
        )
    });
    return (!robots.length) ? <h1 className="tc f1">Loading</h1> :
      (
      <div className='tc'>
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange}/>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots}/>
          </ErrorBoundry>
        </Scroll>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
