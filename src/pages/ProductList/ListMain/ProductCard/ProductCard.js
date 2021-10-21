import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
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
      <div className="productCard">
        <ul className="productCardList">
          <li key={id}>
            <Link
              to={`products/${id}`}
              onMouseOver={this.handleMouseHover}
              onMouseOut={this.handleMouseHover}
            >
              <img
                className={isMouseOver ? 'mouseUp' : 'mouseDown'}
                src={imageUrlList[0]}
                alt="MRDR JH 트레이닝 바지"
              />
              <img
                className={isMouseOver ? 'mouseDown' : 'mouseUp'}
                src={imageUrlList[1]}
                alt="Dr.HANS 크루 바지"
              />
            </Link>
          </li>
          <li className="productTitle">
            <span>{name}</span>
          </li>
          <li className="productPrice">
            <span className="discountedPrice">
              {discountedPrice.toLocaleString()}원
            </span>
            {discountedPrice !== originPrice && (
              <span className="originPrice">
                {originPrice.toLocaleString()}원
              </span>
            )}
          </li>
          <li className="productColorAmount">{colorAmount} 컬러</li>
        </ul>
      </div>
    );
  }
}
export default withRouter(ProductCard);
