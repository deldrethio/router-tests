import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import SubRoute1 from './subRoute1';
import SubRoute2 from './subRoute2';

class Route1 extends Component {
  render() {
    return (
      <div className="route route-1">
        Route 1

        <Link to="/route1/subroute1">SubRoute1</Link>
        <Link to="/route1/subroute2">SubRoute2</Link>

        <Route path="/route1/subroute1" component={ SubRoute1 } />
        <Route path="/route1/subroute2" component={ SubRoute2 } />
      </div>
    );
  }
}

export default Route1;
