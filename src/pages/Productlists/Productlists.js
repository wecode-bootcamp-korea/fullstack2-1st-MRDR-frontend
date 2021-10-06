import React from 'react';
import { Link } from 'react-router-dom';
import ProductsCard from './ProductCard/ProductCard';
import ProductListsFooter from './ProductListsFooter/ProductListsFooter';
import ProductSubCategory from './ProductSubCategory/ProductSubCategories';
import './ProductLists.scss';

class ProductLists extends React.Component {
  constructor() {
    super();
    this.state = {
      productsList: [],
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/productsListData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({ categoryList: res.categoryData });
        this.setState({ productsList: res.listData });
      });
  }

  render() {
    const { categoryList, productsList } = this.state;
    return (
      <div className="productLists">
        <section className="productHeader">
          <h1 className="productHeaderTitle">베스트</h1>
          <div className="productHeaderCategory">
            {categoryList.map(category => {
              const { id, name } = category;
              return <ProductSubCategory key={id} name={name} />;
            })}
          </div>
        </section>
        <section className="productMain">
          <div className="productMainInfo">
            <article className="productQuantity">229개의 상품</article>
            <article className="productSort">
              <div className="dropDown">
                상품정렬
                <div className="dropDownCategory">
                  <Link to="/productlists">낮은가격</Link>
                  <Link to="/productlists">높은가격</Link>
                  <Link to="/productlists">인기상품</Link>
                  <Link to="/productlists">조회수</Link>
                </div>
              </div>
            </article>
          </div>
          <div className="productMainList">
            {productsList.map(list => {
              const {
                id,
                img1,
                img2,
                alt1,
                alt2,
                review,
                name,
                price,
                colorAmount,
                textBox,
              } = list;
              return (
                <ProductsCard
                  key={id}
                  img1={img1}
                  img2={img2}
                  alt1={alt1}
                  alt2={alt2}
                  review={review}
                  name={name}
                  price={price}
                  colorAmount={colorAmount}
                  textBox={textBox}
                />
              );
            })}
          </div>
        </section>
        <ProductListsFooter />
      </div>
    );
  }
}

export default ProductLists;
