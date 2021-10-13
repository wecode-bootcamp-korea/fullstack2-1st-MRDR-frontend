import React from 'react';
import ProductSubCategory from './ProductSubCategory/ProductSubCategories';
import './ProductHeader.scss';

class ProductHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch('/data/productListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ categoryList: res.categoryData });
      });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <header className="productHeader">
        <h1 className="productHeaderTitle">하의</h1>
        <div className="productHeaderCategory">
          {categoryList.map(category => {
            return <ProductSubCategory key={category.id} {...category} />;
          })}
        </div>
      </header>
    );
  }
}

export default ProductHeader;
