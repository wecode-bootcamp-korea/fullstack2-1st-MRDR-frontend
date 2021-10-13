import React from 'react';
import './Main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel.js';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Carousel />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    );
  }
}

export default Main;
