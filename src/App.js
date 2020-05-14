import React, { Fragment } from 'react';
import {robots} from './robots.js';
import CardList from './CardList.js';

const App = () =>{
  return (
    <Fragment>
    <h1>Robofriends</h1>
    <CardList robots={robots}/>
    </Fragment>
  )
}

export default App;
