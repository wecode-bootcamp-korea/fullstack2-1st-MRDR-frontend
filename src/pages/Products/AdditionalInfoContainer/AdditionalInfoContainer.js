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
    const { productColorList } = this.props;
    return (
      <div className="AdditionalInfoContainer">
        <AdditionalInfoTap detailRef={detailRef} guideRef={guideRef} />
        <DetailInfoContainer
          detailRef={detailRef}
          productColorList={productColorList}
        />
        <PurchasingGuide guideRef={guideRef} />
      </div>
    );
  }
}

export default AdditionalInfoContainer;
