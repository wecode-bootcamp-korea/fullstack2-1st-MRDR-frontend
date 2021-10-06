import React from 'react';
import { Link } from 'react-router-dom';
import './ProductSubCategories.scss';

class ProductSubCategory extends React.Component {
  render() {
    return (
      <ul className="categoryUnorderedList">
        <li className="categoryList">
          <Link to="/productlists" key={this.props.id}>
            {this.props.name}
          </Link>
        </li>
      </ul>
    );
  }
}

export default ProductSubCategory;
