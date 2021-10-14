import React from 'react';
import AdditionalInfoTap from './AdditionalInfoTap/AdditionalInfoTap';
import DetailInfoContainer from './DetailInfoContainer/DetailInfoContainer';
import PurchasingGuide from './PurchasingGuide/PurchasingGuide';
import './AdditionalInfoContainer.scss';

class AdditionalInfoContainer extends React.Component {
  constructor() {
    super();
    this.detailRef = React.createRef();
    this.guideRef = React.createRef();
  }

  render() {
    const { detailRef, guideRef } = this;
    const { productColorList, detailImageUrl, infoTapRef, infoTapOnScroll } =
      this.props;
    return (
      <div className="AdditionalInfoContainer" ref={infoTapRef}>
        <AdditionalInfoTap
          detailRef={detailRef}
          guideRef={guideRef}
          infoTapRef={infoTapRef}
          infoTapOnScroll={infoTapOnScroll}
        />
        <DetailInfoContainer
          productColorList={productColorList}
          detailImageUrl={detailImageUrl}
          detailRef={detailRef}
        />
        <PurchasingGuide guideRef={guideRef} />
      </div>
    );
  }
}

export default AdditionalInfoContainer;
