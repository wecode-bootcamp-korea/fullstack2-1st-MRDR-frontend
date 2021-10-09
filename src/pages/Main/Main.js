import React from 'react';
import './Main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    );
  }
}

export default Main;
