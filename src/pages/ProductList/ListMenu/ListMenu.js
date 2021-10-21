import React from 'react';
import ProductSort from './ProductSort/ProductSort';
import './ListMenu.scss';

class ListMenu extends React.Component {
  render() {
    const { productCount } = this.props;

    return (
      <div className="listMenu">
        <section className="productQuantity">{productCount}개의 상품</section>
        <ProductSort />
      </div>
    );
  }
}

export default ListMenu;
