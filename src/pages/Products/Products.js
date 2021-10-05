import React from 'react';
import ImagesContainer from './ImagesContainer';
import InfoContainer from './InfoContainer/InfoContainer';
import AdditionalInfoContainer from './AdditionalInfoContainer';
import PRODUCT_INFO_DATA from './InfoContainer/data';
import './Products.scss';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      product: PRODUCT_INFO_DATA[0],
      selectedColor: null, // bring this up to Products.js
    };
  }

  selectColor = color => {
    this.setState({
      selectedColor: this.state.selectedColor === color ? null : color,
    });
  };

  render() {
    const { product, selectedColor } = this.state;

    return (
      <div className="Products">
        <div className="mainInfoWrapper">
          <ImagesContainer selectedColor={selectedColor} />
          <InfoContainer product={product} selectColor={this.selectColor} />
        </div>
        <AdditionalInfoContainer />
      </div>
    );
  }
}

export default Products;

// import React from 'react';
// import ImagesContainer from './ImagesContainer';
// import InfoContainer from './InfoContainer/InfoContainer';
// import AdditionalInfoContainer from './AdditionalInfoContainer';
// import './Products.scss';

// class Products extends React.Component {
//   render() {
//     return (
//       <div className="Products">
//         <div className="mainInfoWrapper">
//           <ImagesContainer />
//           <InfoContainer />
//         </div>
//         <AdditionalInfoContainer />
//       </div>
//     );
//   }
// }

// export default Products;
