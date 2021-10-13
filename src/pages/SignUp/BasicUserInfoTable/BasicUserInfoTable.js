import React from 'react';
import TableHeader from '../components/TableHeader/TableHeader';
import TableRows from '../components/TableRows/TableRows';
import { joinPageComponentsSwitcher } from '../../../util/signUp';
import IdTableRow from '../IdTableRow/IdTableRow';
import AdressTableRow from '../AdressTableRow/AdressTableRow';
import PhoneTableRow from '../PhoneTableRow/PhoneTableRow';
import './BasicUserInfoTable.scss';

class BasicUserInfoTable extends React.Component {
  render() {
    const { usertype, userBusiness, onChange, radioBtnOnClick } = this.props;

    return (
      <div className="BasicUserInfoTable">
        <table className="basicInfo">
          <TableHeader radioBtnOnClick={radioBtnOnClick} usertype={usertype} />
          <tbody>
            {usertype &&
              joinPageComponentsSwitcher[usertype]({
                radioBtnOnClick,
                usertype,
                userBusiness,
                onChange,
              })}
            <IdTableRow onChange={onChange} />
            <TableRows
              required={true}
              onChange={onChange}
              name="userPassword"
              placeholder="(영문 대소문자/숫자/특문자 중 2가지 이상 조합.8~16자)"
              td="비밀번호"
            />
            <TableRows
              required={true}
              onChange={onChange}
              name="userPasswordConfirm"
              td="비밀번호 확인"
            />
            <TableRows
              require={true}
              onChange={onChange}
              td="이름"
              name="userFirstAdress"
            />
            <AdressTableRow onChange={onChange} />
            <PhoneTableRow onChange={onChange} />
            <TableRows
              required={true}
              onChange={onChange}
              td="이메일"
              className="tr"
              name="userEmail"
              type="email"
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default BasicUserInfoTable;
