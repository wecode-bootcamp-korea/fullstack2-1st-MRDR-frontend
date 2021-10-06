import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Productlists from './pages/Productlists/Productlists';
import SignUp from './pages/SignUp/SignUp';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/productlists" component={Productlists} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
