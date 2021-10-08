import React from 'react';
import './TwoColumnRow.scss';

class TwoColumnRow extends React.Component {
  render() {
    const { className, description, price } = this.props;
    return (
      <div className={`${className ? className : ''} TwoColumnRow`}>
        <span>{description}</span>
        <span>{price}</span>
      </div>
    );
  }
}

export default React.memo(TwoColumnRow);
