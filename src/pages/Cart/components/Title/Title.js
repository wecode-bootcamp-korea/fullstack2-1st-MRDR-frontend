import React from 'react';

class Title extends React.Component {
  render() {
    const { title, className } = this.props;
    return <h1 className={className}>{title}</h1>;
  }
}

export default Title;
