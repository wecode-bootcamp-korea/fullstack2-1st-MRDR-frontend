import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import './ProductSort.scss';

class ProductSort extends React.Component {
  render() {
    const { valueHandler } = this.props;
    const { search } = this.props.location;
    const searchArr = search.split('&');
    const priceVal = searchArr.length !== 1 ? searchArr[1].split('=')[1] : '';
    return (
      <section className="productSort">
        <span className="productSortList">
          상품정렬
          <img src="https://andar.co.kr/common/PC/arrow_down.png" />
        </span>
        <div className="dropDown" onClick={valueHandler}>
          <Link
            to={`/productlist${
              searchArr.length === 1
                ? search + '&price=DESC'
                : priceVal !== 'DESC'
                ? searchArr[0] + '&price=DESC'
                : search
            }`}
          >
            높은가격
          </Link>
          <Link
            to={`/productlist${
              searchArr.length === 1
                ? search + '&price=ASC'
                : priceVal !== 'ASC'
                ? searchArr[0] + '&price=ASC'
                : search
            }`}
          >
            낮은가격
          </Link>
        </div>
      </section>
    );
  }
}

export default withRouter(ProductSort);
