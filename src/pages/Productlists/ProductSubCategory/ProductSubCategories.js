import React from 'react';

class ProductSubCategory extends React.Component {
  render() {
    return (
      <ul className="categoryUnorderedList">
        <li className="categoryList">
          <a href="#" key={this.props.id}>
            {this.props.name}
          </a>
        </li>
      </ul>
    );
  }
}

export default ProductSubCategory;
