import React from 'react';
import { Link } from 'react-router-dom';
import './ProductListsFooter.scss';

class ProductListsFooter extends React.Component {
  render() {
    return (
      <ul className="productListsFooter">
        <li>
          <Link to="/productlists">
            <img src="https://andar.co.kr/_wisa/img/common/paging_prev.png" />
          </Link>
        </li>
        <li>
          <Link to="/productlists">1</Link>
        </li>
        <li>
          <Link to="/productlists">2</Link>
        </li>
        <li>
          <Link to="/productlists">3</Link>
        </li>
        <li>
          <Link to="/productlists">4</Link>
        </li>
        <li>
          <Link to="/productlists">5</Link>
        </li>
        <li>
          <Link to="/productlists">
            <img src="https://andar.co.kr/_wisa/img/common/paging_next.png" />
          </Link>
        </li>
      </ul>
    );
  }
}

export default ProductListsFooter;
