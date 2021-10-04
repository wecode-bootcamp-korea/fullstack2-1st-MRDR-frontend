import React from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import RadioBtns from '../RadioBtns/RadioBtns';
import TableHeader from '../TableHeader/TableHeader';
import TableRows from '../TableRows/TableRows';
import './BusinessUserTable.scss';

class BusinessUserTable extends React.Component {
  render() {
    const {
      props: { onClick, usertype, userBusiness },
    } = this;
    return (
      <div className="BusinessUser">
        <table className="basicInfo">
          <TableHeader onClick={onClick} usertype={usertype} />
          <tbody>
            <tr>
              <td>사업자 구분</td>
              <td className="businessInfo" colSpan="2">
                <RadioBtns
                  onClick={onClick}
                  userBusiness={userBusiness}
                  name="userBusiness"
                  btns={[
                    {
                      id: 'companyBusiness',
                      value: 'companyBusiness',
                      label: '법인사업자',
                    },
                    {
                      id: 'personalBusiness',
                      value: 'personalBusiness',
                      label: '개인사업자',
                    },
                  ]}
                />
              </td>
            </tr>

            <TableRows
              td="상호명"
              className="companyName"
              name="userCompanyName"
            />
            <TableRows
              td="사업자번호"
              className="tr"
              name="userBusinessNumber"
            />
            <tr className="idTr">
              <td>아이디</td>
              <td colSpan="2" className="idTd">
                <div className="idTdContainer">
                  <Input
                    name="userId"
                    placeholder={'영소문자/숫자,4~16자'}
                    className="input"
                  />
                  <small>아이디를 입력해 주세요.</small>
                </div>
              </td>
            </tr>
            <TableRows
              name="userPassword"
              placeholder="(영문 대소문자/숫자/특문자 중 2가지 이상 조합.8~16자)"
              td="비밀번호"
              className="tr"
            />

            <TableRows
              name="userPasswordConfirm"
              td="비밀번호 확인"
              className="tr"
            />
            <TableRows td="이름" className="tr" name="userFirstAdress" />
            <tr className="adressTr">
              <td rowSpan="3">주소</td>
              <td rowSpan="3" className="daressTd" colSpan="2">
                <div className="innerRow innerRowColumn">
                  <Input className="input" name="userMiddleAdress" />
                  <Button content={'우편번호'} className="adressNumber" />
                </div>
                <Input
                  name="userSecondAdress"
                  className="input innerRowColumn"
                  placeholder="기본주소"
                />
                <Input className="input" name="userthirdAdress" />
              </td>
              <td></td>
            </tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>

            <tr>
              <td colSpan="2">휴대폰 번호</td>
              <td>
                <div className="innerRow">
                  <select
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
                  <Input
                    type="number"
                    name="userSecondPhoneNumber"
                    className="input phoneNumberInput"
                  />
                  -&nbsp;
                  <Input
                    type="number"
                    name="userThirdPhoneNumber"
                    className="input phoneNumberInput"
                  />
                </div>
              </td>
            </tr>
            <TableRows td="이메일" className="tr" name="userEmail" />
          </tbody>
        </table>
      </div>
    );
  }
}

export default BusinessUserTable;
