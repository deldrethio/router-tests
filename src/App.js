import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Route1 from './route-1';
import Route2 from './route-2';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Routing</h2>
          </div>

          <Link to="/route1">Route 1</Link>
          <Link to="/route2">Route 2</Link>

          <Link to="/route1/subroute2">SubRoute 2</Link>

          <Switch>
            <Route path="/route1" component={ Route1 } />
            <Route path="/route2" component={ Route2 } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
