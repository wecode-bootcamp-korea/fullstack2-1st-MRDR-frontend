import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick, id, name, className } = this.props;
    return (
      <button id={id} className={className || id} onClick={onClick}>
        {name}
      </button>
    );
  }
}

export default Button;
