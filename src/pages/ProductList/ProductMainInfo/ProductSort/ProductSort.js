import React from 'react';
import './ProductSort.scss';

class ProductSort extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: '',
    };
  }

  valueHandler = e => {
    this.setState({ activeTab: e.target.value });
  };

  render() {
    return (
      <section className="productSort">
        <span className="productSortList">
          상품정렬
          <img src="https://andar.co.kr/common/PC/arrow_down.png" />
        </span>
        <select className="dropDown" onChange={this.valueHandler}>
          <option value="1">낮은 가격</option>
          <option value="2">높은 가격</option>
        </select>
      </section>
    );
  }
}

export default ProductSort;
