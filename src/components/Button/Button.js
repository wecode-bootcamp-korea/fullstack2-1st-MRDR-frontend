import React from 'react';

class Button extends React.Component {
  render() {
    const { onClick, id, className, content, message } = this.props;

    return (
      <button onClick={onClick} className={className || id}>
        {content || ''} {message}
      </button>
    );
  }
}

export default Button;
