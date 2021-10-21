import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './ListCategory.scss';

class ListCategory extends React.Component {
  render() {
    const { search } = this.props.location;

    return (
      <header className="listCategory">
        <h1 className="listCategoryTitle">하의</h1>
        <ul className="listSubCategory">
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

export default withRouter(ListCategory);
