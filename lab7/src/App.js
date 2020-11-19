import logo from './logo.svg';
import './App.css';

import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import CarList from './CarList'
import About from './About'

import EditCar from './EditCar'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path='/cars'>
        <CarList></CarList>
      </Route>
      <Route path='/new'>
        <EditCar></EditCar>
      </Route>
    </Switch>
  </Router>
)

export default App;
