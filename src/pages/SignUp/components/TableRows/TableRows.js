import React from 'react';
import Input from '../Input/Input';

class TableRows extends React.Component {
  render() {
    const {
      props: { tdClassName, placeholder, td, className, content },
    } = this;
    return (
      <tr className={className}>
        <td>{td}</td>
        <td colSpan="2" tdClassName={tdClassName}>
          <Input placeholder={placeholder} className="input" />
          {content ? content : ''}
        </td>
      </tr>
    );
  }
}

export default TableRows;
