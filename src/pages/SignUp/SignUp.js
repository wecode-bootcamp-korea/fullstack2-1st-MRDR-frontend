import React from 'react';
import { Link } from 'react-router-dom';
import { joinPageComponentsSwitcher } from '../../util';
import AdditionalInfoTable from './components/AdditionalInfoTable/AdditionalInfoTable';
import AgreePolicyTable from './components/AgreePolicyTable/AgreePolicyTable';
import Button from './components/Button/Button';
import './SignUp.scss';

class SignUp extends React.Component {
  state = { usertype: 'personalUser' };

  onClick = e => {
    const {
      target: { value, name },
    } = e;

    const { state } = this;

    if (name === 'userType') {
      this.setState(() => ({ ...state, [name]: value }));
      return;
    }

    if (name === 'userBusiness') {
      this.setState(() => ({ [name]: value }));
      return;
    }

    this.setState(() => ({ [name]: value }));
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    const {
      target: { value, name },
    } = e;
    this.setState(() => ({ [name]: value }));
  };

  render() {
    const {
      onChange,
      onSubmit,
      onClick,
      state: { usertype, userBusiness },
    } = this;
    return (
      <div className="SignUp">
        <form onSubmit={onSubmit} className="signUpWrapper">
          <h1 className="signUpTitle">회원가입</h1>
          {joinPageComponentsSwitcher[usertype]({
            usertype,
            userBusiness,
            onClick,
            onChange,
          })}
          <AdditionalInfoTable onChange={onChange} />
          <AgreePolicyTable onChange={onChange} />
          <div className="signUpButtons">
            <Link to={'main'} className={'signUpCancel'}>
              취소
            </Link>
            <Button className={'signUpStart'} message={'회원가입'} />
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
