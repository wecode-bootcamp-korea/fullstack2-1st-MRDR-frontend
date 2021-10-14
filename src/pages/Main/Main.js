import React from 'react';
import './Main.scss';
import Carousel from '../../components/Carousel/Carousel.js';
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
