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
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/cart" component={Cart} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    );
  }
}

export default Routes;
