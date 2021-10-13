import React from 'react';
import PagiNation from './PagiNation/PagiNation';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductMainInfo from './ProductMainInfo/ProductMainInfo';
import ProductMainList from './ProductMainList/ProductMainList';
import './ProductList.scss';

class ProductList extends React.Component {
  render() {
    return (
      <div className="ProductList">
        <ProductHeader />
        <main className="productMain">
          <ProductMainInfo />
          <ProductMainList />
        </main>
        <PagiNation />
      </div>
    );
  }
}

export default ProductList;
