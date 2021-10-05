import React from 'react';
import BasicInfo from './BasicInfo/BasicInfo';
// import PRODUCT_INFO_DATA from './data';
import './InfoContainer.scss';
import Options from './Options/Options';

class InfoContainer extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     product: PRODUCT_INFO_DATA[0],
  //     selectedColor: null, // bring this up to Products.js
  //   };
  // }
  render() {
    // const { product } = this.state;
    const { product, selectColor } = this.props;

    return (
      <div className="InfoContainer">
        <BasicInfo product={product} />
        <Options product={product} selectColor={selectColor} />
      </div>
    );
  }
}

export default InfoContainer;
