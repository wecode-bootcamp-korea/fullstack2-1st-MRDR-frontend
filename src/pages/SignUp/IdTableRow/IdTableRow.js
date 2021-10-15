import React from 'react';

class IdTableRow extends React.Component {
  render() {
    const { onChange, className, value } = this.props;
    console.log(value);
    return (
      <tr className="idTr">
        <td>아이디</td>
        <td colSpan="2" className="idTd">
          <div className="idTdContainer">
            <input
              value={value || ''}
              required={true}
              onChange={onChange}
              name="userId"
              placeholder={'아이디'}
              className="input"
            />
          </div>
        </td>
      </tr>
    );
  }
}

export default IdTableRow;
