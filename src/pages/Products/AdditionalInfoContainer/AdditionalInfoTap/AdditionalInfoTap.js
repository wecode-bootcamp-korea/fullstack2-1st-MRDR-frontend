import React from 'react';
import './AdditionalInfoTap.scss';

class AdditionalInfoTap extends React.Component {
  clickDetailTap = () => {
    const { detailRef } = this.props;
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: detailRef.current.offsetTop - 115,
    });
  };

  clickGuideTap = () => {
    const { guideRef } = this.props;
    window.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: guideRef.current.offsetTop - 200,
    });
  };

  render() {
    const { clickDetailTap, clickGuideTap } = this;
    const { infoTapOnScroll } = this.props;
    return (
      <div
        className={
          infoTapOnScroll
            ? 'AdditionalInfoTap positionFixed'
            : 'AdditionalInfoTap'
        }
      >
        <ul className="infoTapList">
          <li className="reviewTap">
            <button>리뷰</button>
          </li>
          <li className="detailInfoTap">
            <button onClick={clickDetailTap}>상세정보</button>
          </li>
          <li className="purchasingGuideTap">
            <button onClick={clickGuideTap}>구매안내</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default AdditionalInfoTap;
