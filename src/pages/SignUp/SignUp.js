import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { policyAgreements } from '../../util/signUp';
import Title from '../Cart/components/Title/Title';
import AdditionalInfoTable from './AdditionalInfoTable/AdditionalInfoTable';
import AgreePolicyTable from './AgreePolicyTable/AgreePolicyTable';
import BasicUserInfoTable from './BasicUserInfoTable/BasicUserInfoTable';
import './SignUp.scss';

class SignUp extends React.Component {
  state = {
    usertype: 'personalUser',
    allAgreeBox: false,
    useInfoAgree: false,
    personalInfoAgree: false,
    emailAgree: false,
    SNSAgree: false,
  };

  openModal = className => {
    const { state } = this;
    this.setState({ [className]: [!state[className][0], state[className][1]] });
  };

  checkBoxController = id => {
    if (id === 'allAgreeBox') {
      this.setState(state => {
        for (let agreePolicy of policyAgreements) {
          state[agreePolicy] = !state[agreePolicy];
        }
        return state;
      });
    } else {
      this.setState(state => ({ [id]: !state[id] }));
    }
  };

  radioBtnOnClick = (name, value) => {
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      onChange,
      radioBtnOnClick,
      onSubmit,
      openModal,
      checkBoxController,
      state: {
        usertype,
        userBusiness,
        allAgreeBox,
        useInfoAgree,
        personalInfoAgree,
        emailAgree,
        SNSAgree,
      },
    } = this;

    return (
      <div className="SignUp">
        <form onSubmit={onSubmit} className="signUpWrapper">
          <Title className="signUpTitle" title="회원가입" />
          <BasicUserInfoTable
            checkBoxController={checkBoxController}
            radioBtnOnClick={radioBtnOnClick}
            usertype={usertype}
            userBusiness={userBusiness}
            onChange={onChange}
          />
          <AdditionalInfoTable onChange={onChange} />
          <AgreePolicyTable
            allAgreeBox={allAgreeBox}
            useInfoAgree={useInfoAgree}
            personalInfoAgree={personalInfoAgree}
            emailAgree={emailAgree}
            SNSAgree={SNSAgree}
            openModal={openModal}
            checkBoxController={checkBoxController}
          />
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
