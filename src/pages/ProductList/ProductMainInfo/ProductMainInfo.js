import React from 'react';
import ProductSort from './ProductSort/ProductSort';
import './ProductMainInfo.scss';

class ProductMainInfo extends React.Component {
  render() {
    const { valueHandler, productCount } = this.props;
    return (
      <div className="productMainInfo">
        <section className="productQuantity">{productCount}개의 상품</section>
        <ProductSort valueHandler={valueHandler} />
      </div>
    );
  }
}

export default ProductMainInfo;
