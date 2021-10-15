import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import ProductList from './pages/ProductList/ProductList';
import SignUp from './pages/SignUp/SignUp';
import Cart from './pages/Cart';

class Routes extends React.Component {
  state = { isLogined: false };

  componentDidMount() {
    this.setState({ isLogined: localStorage.getItem('token') });
  }

  login = isLogined => {
    this.setState({ isLogined: isLogined });
  };

  render() {
    return (
      <Router>
        <Nav isLogined={this.state.isLogined} />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/products/:id" component={Products} />
          <Route path="/login">
            <Login login={this.login} />
          </Route>
          <Route path="/signup" component={SignUp} />
          <Route path="/cart" component={Cart} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
