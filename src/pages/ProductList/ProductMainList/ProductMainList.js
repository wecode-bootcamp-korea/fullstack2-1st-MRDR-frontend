import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductMainList.scss';

class ProductMainList extends React.Component {
  render() {
    const { productList } = this.props;
    return (
      <div className="productMainList">
        {productList.map(product => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    );
  }
}

export default ProductMainList;
