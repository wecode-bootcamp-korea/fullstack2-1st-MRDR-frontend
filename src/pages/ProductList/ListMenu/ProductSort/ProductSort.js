import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './ProductSort.scss';

class ProductSort extends React.Component {
  render() {
    const { search } = this.props.location;
    const searchArray = search.split('&');
    const priceValue =
      searchArray.length !== 1 ? searchArray[1].split('=')[1] : '';

    return (
      <section className="productSort">
        <span className="productSortList">
          상품정렬
          <img src="https://andar.co.kr/common/PC/arrow_down.png" alt="arrow" />
        </span>
        <div className="dropDown">
          <Link
            to={{
              pathname: '/productlist',
              search:
                searchArray.length === 1
                  ? search + '&price=DESC'
                  : priceValue !== 'DESC'
                  ? searchArray[0] + '&price=DESC'
                  : search,
            }}
          >
            높은가격
          </Link>
          <Link
            to={{
              pathname: '/productlist',
              search:
                searchArray.length === 1
                  ? search + '&price=ASC'
                  : priceValue !== 'ASC'
                  ? searchArray[0] + '&price=ASC'
                  : search,
            }}
          >
            낮은가격
          </Link>
        </div>
      </section>
    );
  }
}

export default withRouter(ProductSort);
