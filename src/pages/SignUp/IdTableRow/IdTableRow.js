import React from 'react';

class IdTableRow extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <tr className="idTr">
        <td>아이디</td>
        <td colSpan="2" className="idTd">
          <div className="idTdContainer">
            <input
              required={true}
              onChange={onChange}
              name="userId"
              placeholder={'영소문자/숫자,4~16자'}
              className="input"
            />
            <small>아이디를 입력해 주세요.</small>
          </div>
        </td>
      </tr>
    );
  }
}

export default IdTableRow;
