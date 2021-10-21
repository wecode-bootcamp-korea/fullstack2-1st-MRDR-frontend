import React from 'react';
import { withRouter } from 'react-router-dom';
import ListPagiNation from './ListPagiNation/ListPagiNation';
import ListCategory from './ListCategory/ListCategory';
import ListMenu from './ListMenu/ListMenu';
import ListMain from './ListMain/ListMain';
import API_URL from '../../const/api';
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
    fetch(`${API_URL}/products${search}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ productList: res.products });
      });
  }

  componentDidUpdate(prevProps) {
    const { search: currentQuery } = this.props.location;
    const { search: prevQuery } = prevProps.location;
    if (currentQuery !== prevQuery) {
      fetch(`${API_URL}/products${currentQuery}`)
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
      <div className="productList">
        {search && <ListCategory />}
        <main className="productMain">
          {search && <ListMenu productCount={productList.length} />}
          <ListMain productList={productList} />
        </main>
        {search && <ListPagiNation />}
      </div>
    );
  }
}

export default withRouter(ProductList);
