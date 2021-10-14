import React from 'react';
import TableHeader from '../components/TableHeader/TableHeader';
import TableRows from '../components/TableRows/TableRows';
import { joinPageComponentsSwitcher } from '../../../util/signUp';
import IdTableRow from '../IdTableRow/IdTableRow';
import AdressTableRow from '../AdressTableRow/AdressTableRow';
import PhoneTableRow from '../PhoneTableRow/PhoneTableRow';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import './BasicUserInfoTable.scss';

class BasicUserInfoTable extends React.Component {
  render() {
    const { state, usertype, userBusiness, onChange, radioBtnOnClick } =
      this.props;
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

            <IdTableRow value={state?.userId} onChange={onChange} />
            <TableRows
              type={'password'}
              required={true}
              onChange={onChange}
              name="userPassword"
              placeholder="비밀번호"
              td="비밀번호"
              value={state.password}
              content={
                state?.userPassword === state?.userPasswordConfirm || (
                  <ErrorMessage
                    className={'ErrorMessage'}
                    message={'비밀번호가 일치하지 않습니다.'}
                  />
                )
              }
            />
            <TableRows
              type={'password'}
              required={true}
              onChange={onChange}
              name="userPasswordConfirm"
              placeholder="비밀번호 확인"
              td="비밀번호 확인"
              content={
                state?.userPassword === state?.userPasswordConfirm || (
                  <ErrorMessage
                    className={'ErrorMessage'}
                    message={'비밀번호가 일치하지 않습니다.'}
                  />
                )
              }
            />
            <TableRows
              require={true}
              onChange={onChange}
              td="이름"
              name="userFirstAdress"
              placeholder="필수입력"
            />
            <AdressTableRow required={true} onChange={onChange} />
            <PhoneTableRow required={true} onChange={onChange} />
            <TableRows
              placeholder="필수입력"
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
