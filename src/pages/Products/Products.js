import React from 'react';
import ImagesContainer from './ImagesContainer';
import InfoContainer from './InfoContainer';
import AdditionalInfoContainer from './AdditionalInfoContainer';
import './Products.scss';

class Products extends React.Component {
  render() {
    return (
      <div className="Products">
        <div className="mainInfoWrapper">
          <ImagesContainer />
          <InfoContainer />
        </div>
        <AdditionalInfoContainer />
      </div>
    );
  }
}

export default Products;
