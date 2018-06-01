import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/about';
import Services from './components/services';
import Works from './components/works';
import Videos from './components/videos';
import Request from './components/request';
import Profile from './components/profile';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar /> 
        <Route path="/" exact strict component={About} />
        <Route path="/services" exact strict component={Services} />
        <Route path="/works" exact strict component={Works} />
        <Route path="/videos" exact strict component={Videos} />
        <Route path="/request" exact strict component={Request} />
        <Route path="/profile" exact strict component={Profile} />
      </div>
      </Router>
    );
  }
}

export default App;
