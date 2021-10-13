import React from 'react';
import ProductCard from './ProductCard/ProductCard';
import ProductSubCategory from './ProductSubCategory/ProductSubCategories';
import PagiNation from './PagiNation/PagiNation';
import ProductSort from './ProductSort/ProductSort';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch('/data/productListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ categoryList: res.categoryData });
        this.setState({ productList: res.productListData });
      });
  }

  render() {
    const { categoryList, productList } = this.state;
    return (
      <div className="productList">
        <header className="productHeader">
          <h1 className="productHeaderTitle">베스트</h1>
          <div className="productHeaderCategory">
            {categoryList.map(category => {
              return <ProductSubCategory key={category.id} {...category} />;
            })}
          </div>
        </header>
        <main className="productMain">
          <div className="productMainInfo">
            <section className="productQuantity">229개의 상품</section>
            <ProductSort />
          </div>
          <div className="productMainList">
            {productList.map(product => {
              return <ProductCard key={product.id} {...product} />;
            })}
          </div>
        </main>
        <PagiNation />
      </div>
    );
  }
}

export default ProductList;
