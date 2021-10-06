import React from 'react';

class ProductsCard extends React.Component {
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
    const { id, img1, img2, review, name, price, colorAmount, textBox } =
      this.props;
    const { isMouseOver } = this.state;
    return (
      <div className="productLists">
        <ul className="productUnorderedList">
          <a
            href="#"
            onMouseOver={this.handleMouseHover}
            onMouseOut={this.handleMouseHover}
          >
            <img
              className={isMouseOver ? 'mouseUp' : 'mouseDown'}
              src={img1}
              key={id}
            />
            <img
              className={isMouseOver ? 'mouseDown' : 'mouseUp'}
              src={img2}
              key={id}
            />
          </a>
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
export default ProductsCard;
