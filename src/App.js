import React, { Fragment } from 'react';
import {robots} from './robots.js';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';

const App = () =>{
  return (
    <Fragment>
    <h1>Robofriends</h1>
    <SearchBox />
    <CardList robots={robots}/>
    </Fragment>
  )
}

export default App;
