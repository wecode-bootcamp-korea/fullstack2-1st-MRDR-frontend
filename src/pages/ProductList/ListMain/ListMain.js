import React from 'react';
import { withRouter } from 'react-router-dom';
import ProductCard from './ProductCard/ProductCard';
import './ListMain.scss';

class ListMain extends React.Component {
  render() {
    const { productList } = this.props;

    return (
      <div className="listMain">
        {productList.map(product => {
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    );
  }
}

export default withRouter(ListMain);
