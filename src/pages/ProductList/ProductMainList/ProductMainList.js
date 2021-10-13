import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import './ProductMainList.scss';

class ProductMainList extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    };
  }

  componentDidMount() {
    fetch('/data/productListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ productList: res.productListData });
      });
  }
  render() {
    const { productList } = this.state;

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
