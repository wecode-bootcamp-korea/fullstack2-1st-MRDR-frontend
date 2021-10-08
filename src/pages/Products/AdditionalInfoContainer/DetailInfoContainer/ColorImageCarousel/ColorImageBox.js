import React from 'react';
import './ColorImageBox.scss';

class ColorImageBox extends React.Component {
  render() {
    const { imageUrl } = this.props;
    return (
      <div className="ColorImageBox">
        <img className="colorImage" src={imageUrl} alt="컬러별 상품 이미지" />
      </div>
    );
  }
}

export default ColorImageBox;
