import React, { Component } from 'react';
import ColorImagesContainer from './ColorsImagesContainer/ColorImagesContainer';
import './Options.scss';

class Options extends Component {
  render() {
    const { product, selectColor } = this.props;

    return (
      <div className="Options">
        <div className="lineWrapper">
          <span className="lineTitle">색상</span>
          <div className="lineContent">
            <p className="topLineLeft">
              <span>[필수]</span>옵션을 선택해 주세요
            </p>
            <span className="topLineRight">
              {product.colors.length} options
            </span>
            {/* <ColorImagesContainer product={product} /> */}
          </div>
          {/* <div className="lineContent">
            <div className="topLine">
              <p className="topLineLeft">
                <span>[필수]</span>옵션을 선택해 주세요
              </p>
              <span className="topLineRight">
                {product.colors.length} options
              </span>
            </div>
            <ColorImagesContainer product={product} />
          </div> */}
        </div>

        <ColorImagesContainer product={product} selectColor={selectColor} />

        <div className="lineWrapper relative">
          <span className="lineTitle">사이즈</span>
          <div className="lineContent">
            <p className="topLineLeft">
              <span>[필수]</span>옵션을 선택해 주세요
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Options;
