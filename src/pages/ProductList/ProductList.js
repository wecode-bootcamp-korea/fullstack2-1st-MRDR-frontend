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

  componentDidUpdate(prevProps) {
    const { search: currentQuery } = this.props.location;
    const { search: prevQuery } = prevProps.location;
    if (currentQuery !== prevQuery) {
      fetch(`http://localhost:8000/products${currentQuery}`)
        .then(res => res.json())
        .then(res => {
          this.setState({ productList: res.products });
        });
    }
  }

  render() {
    const { productList } = this.state;
    const { search } = this.props.location;

    return (
      <div className="ProductList">
        {search ? <ProductHeader /> : null}
        <main className="productMain">
          {search ? (
            <ProductMainInfo productCount={productList.length} />
          ) : null}
          <ProductMainList productList={productList} />
        </main>
        {search ? <PagiNation /> : null}
      </div>
    );
  }
}

export default withRouter(ProductList);
