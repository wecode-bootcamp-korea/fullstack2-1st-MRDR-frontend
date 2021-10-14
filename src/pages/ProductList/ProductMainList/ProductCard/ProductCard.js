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
    const { isMouseOver } = this.state;
    const {
      id,
      imageUrlList,
      name,
      originPrice,
      discountedPrice,
      colorAmount,
    } = this.props;
    return (
      <div className="ProductCards">
        <ul className="productUnorderedList">
          <li key={id}>
            <Link
              to={`products/${id}`}
              onMouseOver={this.handleMouseHover}
              onMouseOut={this.handleMouseHover}
            >
              <img
                className={isMouseOver ? 'mouseUp' : 'mouseDown'}
                src={imageUrlList[0]}
              />
              <img
                className={isMouseOver ? 'mouseDown' : 'mouseUp'}
                src={imageUrlList[1]}
              />
            </Link>
          </li>
          <li className="productName">
            <span>{name}</span>
          </li>
          <li className="productPrice">
            <span className="discountedPrice">
              {discountedPrice.toLocaleString()}원
            </span>
            {discountedPrice !== originPrice ? (
              <span className="originPrice">
                {originPrice.toLocaleString()}원
              </span>
            ) : null}
          </li>
          <li className="productColorAmount">{colorAmount} 컬러</li>
        </ul>
      </div>
    );
  }
}
export default ProductCard;
