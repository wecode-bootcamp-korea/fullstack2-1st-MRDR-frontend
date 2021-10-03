import React from 'react';
import AgreePolicy from './components/AgreePolicy/AgreePolicy';
import BusinessUser from './components/BusinessUser/BusinessUser';
import './SignUp.scss';

class SignUp extends React.Component {
  render() {
    return (
      <div className="SignUp">
        <div className="signUpWrapper">
          <h1 className="signUpTitle">회원가입</h1>
          <BusinessUser />
          <h1 className="signUpSubTitle">추가정보</h1>
          {/* <table>
            <TableRows td="생년월일" />
          </table> */}
          <AgreePolicy />
        </div>
      </div>
    );
  }
}

export default SignUp;
