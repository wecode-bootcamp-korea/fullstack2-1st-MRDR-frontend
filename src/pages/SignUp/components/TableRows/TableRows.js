import React from 'react';
import Input from '../Input/Input';

class TableRows extends React.Component {
  render() {
    const {
      props: { placeholder, td, className },
    } = this;
    return (
      <tr className={className}>
        <td>{td}</td>
        <td colSpan="2">
          <Input placeholder={placeholder} />
        </td>
      </tr>
    );
  }
}

export default TableRows;
