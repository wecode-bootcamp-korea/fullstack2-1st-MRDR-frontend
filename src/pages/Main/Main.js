import React from 'react';
import './Main.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel.js';
import ProductMainList from '../ProductList/ProductMainList/ProductMainList';
import ProductList from '../ProductList/ProductList';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Carousel />
        <ProductList />
      </div>
    );
  }
}

export default Main;
