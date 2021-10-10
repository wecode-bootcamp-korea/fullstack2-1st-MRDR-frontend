import React from 'react';
import { faLiraSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import BasicCheckBox from '../BasicCheckBox/BasicCheckBox';
import NumberControlButton from '../../NumberControlButton/NumberControlButton';
import { ROUTES } from '../../../../util/constants';
import CartFuncContext from '../../CartFuncContext';
import { priceChanger } from '../../utils';
import './CartItem.scss';

class CartItem extends React.Component {
  static contextType = CartFuncContext;
  render() {
    const { id, image, options, price, name, isChecked, count } =
      this.props.item;
    const checkBoxOnClick = this.context('checkBoxOnClick');
    const deleteCartById = this.context('deleteCartById');
    return (
      <li className="CartItem">
        <BasicCheckBox
          onClick={() => checkBoxOnClick(id)}
          className="CheckBox"
          id={id}
          isChecked={isChecked}
        />
        <img className="itemImage" alt={name} src={image} />
        <div className="itemInfos">
          <span className="itemName">{name}</span>
          {options.map(({ size, color, id }) => (
            <React.Fragment key={id}>
              <span>{size}</span>
              <span>{color}</span>
              <Link to={ROUTES.CART_OPTION_CHANGE(id)}>옵션변경</Link>
            </React.Fragment>
          ))}
        </div>
        <NumberControlButton id={id} count={count} />
        <h2 className="itemPrice">{`${priceChanger(price)}원`}</h2>
        <FontAwesomeIcon
          onClick={() => deleteCartById(id)}
          className="icon"
          icon={faLiraSign}
        />
      </li>
    );
  }
}

export default CartItem;
