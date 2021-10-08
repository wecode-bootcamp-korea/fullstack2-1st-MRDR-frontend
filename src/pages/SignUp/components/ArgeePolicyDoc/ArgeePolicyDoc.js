import React from 'react';
import './ArgeePolicyDoc.scss';

class ArgeePolicyDoc extends React.Component {
  render() {
    const {
      props: { className },
    } = this;
    return <div className={`ArgeePolicyDoc ${className}`} />;
  }
}

export default ArgeePolicyDoc;
