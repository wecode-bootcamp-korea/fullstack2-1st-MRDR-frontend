import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './ProductHeader.scss';

class ProductHeader extends React.Component {
  render() {
    const { search } = this.props.location;
    return (
      <header className="productHeader">
        <h1 className="productHeaderTitle">하의</h1>
        <ul className="productSubCategory">
          <Link to={`/productlist${search}`} className="total">
            전체
          </Link>
          <Link to={`/productlist${search}`} className="leggings">
            레깅스
          </Link>
          <Link to={`/productlist${search}`} className="pants">
            팬츠
          </Link>
          <Link to={`/productlist${search}`} className="skirtDress">
            스커트 & 드레스
          </Link>
        </ul>
      </header>
    );
  }
}

export default withRouter(ProductHeader);
