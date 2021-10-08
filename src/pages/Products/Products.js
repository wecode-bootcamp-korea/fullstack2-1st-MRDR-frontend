import React from 'react';
import ImagesContainer from './ImagesContainer/ImagesContainer';
import BasicInfoAndOptionsContainer from './BasicInfoAndOptionsContainer/BasicInfoAndOptionsContainer';
import AdditionalInfoContainer from './AdditionalInfoContainer/AdditionalInfoContainer';
import './Products.scss';

class Products extends React.Component {
  render() {
    return (
      <div className="Products">
        <div className="mainInfoWrapper">
          <ImagesContainer />
          <BasicInfoAndOptionsContainer />
        </div>
        <AdditionalInfoContainer />
      </div>
    );
  }
}

export default Products;
