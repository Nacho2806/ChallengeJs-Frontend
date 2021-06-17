import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';

import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Home from './components/Home'
import About from './components/About';
import RegisterList from './components/RegisterList'
import CreateRegister from './components/CreateRegister'
import Signin from './components/Signin';
import Signup from './components/Signup';


function App() {
  return (
    <Router>
        <Navigation/>
        <div className="container p-4">
          <Route path="/" exact component={Welcome}/>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/moves" component={RegisterList}/>
          <Route path="/edit/:id" component={CreateRegister}/>
          <Route path="/create" component={CreateRegister}/>
        </div>  
    </Router>
  );
}

export default App;
