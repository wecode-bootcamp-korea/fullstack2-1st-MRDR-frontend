import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.scss';

class ProductCard extends React.Component {
  constructor() {
    super();
    this.state = {
      isMouseOver: true,
    };
  }

  handleMouseHover = () => {
    const { isMouseOver } = this.state;
    this.setState({ isMouseOver: !isMouseOver });
  };

  render() {
    const {
      id,
      img1,
      img2,
      alt1,
      alt2,
      review,
      name,
      price,
      colorAmount,
      textBox,
    } = this.props;
    const { isMouseOver } = this.state;
    return (
      <div className="productCards">
        <ul className="productUnorderedList">
          <Link
            to="/productlists"
            onMouseOver={this.handleMouseHover}
            onMouseOut={this.handleMouseHover}
          >
            <img
              className={isMouseOver ? 'mouseUp' : 'mouseDown'}
              src={img1}
              alt={alt1}
              key={id}
            />
            <img
              className={isMouseOver ? 'mouseDown' : 'mouseUp'}
              src={img2}
              alt={alt2}
              key={id}
            />
          </Link>
          <li className="productReview">{review}</li>
          <li className="productName">
            <span>{name}</span>
          </li>
          <li className="productPrice">{price}</li>
          <li className="productColorAmount">{colorAmount}</li>
          <li className="productTextBox">
            <span>{textBox}</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default ProductCard;
