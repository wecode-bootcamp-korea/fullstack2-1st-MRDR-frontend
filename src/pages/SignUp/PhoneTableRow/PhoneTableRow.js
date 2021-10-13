import React from 'react';

class PhoneTableRow extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <tr>
        <td colSpan="2">휴대폰 번호</td>
        <td>
          <div className="innerRow">
            <select
              onChange={onChange}
              className="phoneNumberInput"
              name="userFirstPhoneNumber"
              id="phoneNumber"
            >
              <option check="true" value="010">
                010
              </option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>
            -&nbsp;
            <input
              onChange={onChange}
              type="number"
              name="userSecondPhoneNumber"
              className="input phoneNumberInput"
            />
            -&nbsp;
            <input
              onChange={onChange}
              type="number"
              name="userThirdPhoneNumber"
              className="input phoneNumberInput"
            />
          </div>
        </td>
      </tr>
    );
  }
}

export default PhoneTableRow;
