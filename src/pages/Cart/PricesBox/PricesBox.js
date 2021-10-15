import React from 'react';
import { Link } from 'react-router-dom';
import TwoColumnRow from '../components/TwoColumnRow/TwoColumnRow';
import { priceChanger } from '../utils';
import './PricesBox.scss';

class PricesBox extends React.Component {
  render() {
    const { originPrice, discountPrice } = this.props.prices;
    return (
      <div className="PricesBox">
        <div className="priceInfo">
          <ul className="priceDetail">
            <li>
              <TwoColumnRow
                description="상품금액"
                price={priceChanger(originPrice)}
              />
            </li>
            <li>
              <TwoColumnRow
                description="할인금액"
                price={priceChanger(discountPrice)}
              />
            </li>
            <li>
              <TwoColumnRow
                description="배송비"
                price={originPrice ? '2,500' : 0}
              />
            </li>
          </ul>
          <TwoColumnRow
            className="totalPrice"
            description="총 금액"
            price={priceChanger(
              originPrice ? originPrice - discountPrice + 5000 : 0
            )}
          />
        </div>
        <div className="priceBtns">
          <button className="orderBtn">주문하기</button>
          <Link to="/product">계속 쇼핑하기</Link>
          <small>최종 결제 금액은 주문결제 페이지에서 확인해주세요.</small>
        </div>
      </div>
    );
  }
}

export default React.memo(PricesBox);
