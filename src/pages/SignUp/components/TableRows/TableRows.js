import React from 'react';
import Input from '../Input/Input';

class TableRows extends React.Component {
  render() {
    const {
      props: { placeholder, td, className, name },
    } = this;
    return (
      <tr className={className}>
        <td>{td}</td>
        <td colSpan="2">
          <Input placeholder={placeholder} name={name} className="input" />
        </td>
      </tr>
    );
  }
}

export default TableRows;
