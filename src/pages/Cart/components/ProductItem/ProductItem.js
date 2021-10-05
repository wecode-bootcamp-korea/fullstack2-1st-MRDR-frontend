import {
  faAngleDoubleLeft,
  faExpand,
  faFileSignature,
  faLiraSign,
  faRemoveFormat,
  faSign,
  faSignal,
  faSignInAlt,
  faSignOutAlt,
  faXRay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import BasicCheckBox from '../BasicCheckBox/BasicCheckBox';
import NumberControlButton from '../NumberControlButton/NumberControlButton';
import './ProductItem.scss';

class ProductItem extends React.Component {
  render() {
    return (
      <li className="ProductItem">
        <BasicCheckBox type="checkBox" className="CheckBox" id="itemCheckBox" />
        <img alt="product" className="itemImage" />
        <div className="itemInfos">
          <span className="itemName">스트링 피치라이닝 윈드자켓</span>
          <span>[옵션 abcd-efg] 네이비 /6 [11-22]</span>
          <Link to="#">옵션변경</Link>
        </div>
        <NumberControlButton />
        <h2 className="itemPrice">7,9000원</h2>
        <FontAwesomeIcon className="icon" icon={faLiraSign} />
      </li>
    );
  }
}

export default ProductItem;
