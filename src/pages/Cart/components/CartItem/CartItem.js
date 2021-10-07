import React from 'react';
import { faLiraSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import BasicCheckBox from '../BasicCheckBox/BasicCheckBox';
import NumberControlButton from '../../NumberControlButton/NumberControlButton';
import { ROUTES } from '../../../../util/constances';
import './CartItem.scss';

class CartItem extends React.Component {
  render() {
    const {
      onClick,
      item: { id, image, options, price, name, isChecked },
    } = this.props;
    return (
      <li className="CartItem">
        <BasicCheckBox
          onClick={onClick}
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
        <NumberControlButton id={id} />
        <h2 className="itemPrice">{`${price}원`}</h2>
        <FontAwesomeIcon className="icon" icon={faLiraSign} />
      </li>
    );
  }
}

export default CartItem;
