import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSubCategories.scss';

class ProductSubCategory extends React.Component {
  render() {
    const { id, name } = this.props;
    return (
      <ul className="headerCategoryList">
        <li className="categoryList">
          <Link to="/productlist" key={id}>
            {name}
          </Link>
        </li>
      </ul>
    );
  }
}

export default ProductSubCategory;
