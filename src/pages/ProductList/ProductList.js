import React from 'react';
import { withRouter } from 'react-router-dom';
import PagiNation from './PagiNation/PagiNation';
import ProductHeader from './ProductHeader/ProductHeader';
import ProductMainInfo from './ProductMainInfo/ProductMainInfo';
import ProductMainList from './ProductMainList/ProductMainList';
import './ProductList.scss';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      price: '',
    };
  }

  componentDidMount() {
    const { search } = this.props.location;
    fetch(`http://localhost:8000/products${search}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ productList: res.products });
      });
  }

  valueHandler = () => {
    const { search } = this.props.location;
    fetch(`http://localhost:8000/products${search}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ productList: res.products });
      });
  };

  render() {
    const { productList } = this.state;
    const { search } = this.props.location;
    const { valueHandler } = this;

    return (
      <div className="ProductList">
        {search ? <ProductHeader /> : null}
        <main className="productMain">
          {search ? (
            <ProductMainInfo
              valueHandler={valueHandler}
              productCount={productList.length}
            />
          ) : null}
          <ProductMainList productList={productList} />
        </main>
        {search ? <PagiNation /> : null}
      </div>
    );
  }
}

export default withRouter(ProductList);
