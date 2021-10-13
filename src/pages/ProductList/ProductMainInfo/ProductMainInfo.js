import React from 'react';
import ProductSort from './ProductSort/ProductSort';
import './ProductMainInfo.scss';

class ProductMainInfo extends React.Component {
  render() {
    return (
      <div className="productMainInfo">
        <section className="productQuantity">229개의 상품</section>
        <ProductSort />
      </div>
    );
  }
}

export default ProductMainInfo;
