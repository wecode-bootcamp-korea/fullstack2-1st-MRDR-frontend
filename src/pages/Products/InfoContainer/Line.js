import React, { Component } from 'react';
import './Line.scss';

class Line extends Component {
  render() {
    const { title, children, margin } = this.props;

    return (
      <div className={`Line ${margin}`}>
        <span className="title">{title}</span>
        {children}
      </div>
    );
  }
}

export default Line;
