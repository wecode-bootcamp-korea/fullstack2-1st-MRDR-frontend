import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import { ROUTES } from '../../util/constants';
import { failAlert, fetchForCUD } from '../../util/fetch';
import { policyAgreements } from '../../util/signUp';
import { addKey, deleteKey, keyNameChanger } from '../Cart/utils';
import AdditionalInfoTable from './AdditionalInfoTable/AdditionalInfoTable';
import AgreePolicyTable from './AgreePolicyTable/AgreePolicyTable';
import BasicUserInfoTable from './BasicUserInfoTable/BasicUserInfoTable';
import { withRouter } from 'react-router-dom';
import './SignUp.scss';

class SignUp extends React.Component {
  state = {
    userFirstPhoneNumber: '010',
    usertype: 'personalUser',
    allAgreeBox: false,
    useInfoAgree: false,
    personalInfoAgree: false,
    emailAgree: false,
    SNSAgree: false,
    emailAgreeBoxBtn: false,
    useInfoAgreeBtn: false,
    personalInfoAgreeBtn: false,
    userPassword: '',
    userPasswordConfirm: '',
  };

  openModal = id => {
    this.setState({
      [id]: !this.state[id],
    });
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

  onSubmit = async e => {
    e.preventDefault();
    const newState = {};
    for (let key in this.state) {
      newState[key] = this.state[key];
    }
    const isValid = this.keyNamesChanger(newState);
    if (!isValid) return;

    const payload = {
      method: 'post',
      body: JSON.stringify(newState),
      url: ROUTES.SIGNUP,
    };

    const actionFunc = () => {
      this.props.history.push({
        pathname: '/login',
        state: {
          id: this.state['userId'],
          password: this.state['userPassword'],
        },
      });
    };

    await fetchForCUD(payload, { actionFunc, failFunc: () => failAlert(500) });
  };

  keyNamesChanger = body => {
    if (!body['usertype']) {
      alert('회원정보를 선택하세요.');
      return false;
    } else if (body['userPassword'] !== body['userPasswordConfirm']) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return false;
    } else if (!body['useInfoAgree'] || !body['personalInfoAgree']) {
      alert('필수 동의 사항에 동의하지 않으셨어요.');
      return false;
    }

    const phones = [
      body['userFirstPhoneNumber'],
      body['userSecondPhoneNumber'],
      ['userThirdPhoneNumber'],
    ];
    const adresses = [
      body['userMiddleAdress'],
      body['userSecondAdress'],
      body['userthirdAdress'],
    ];

    let phoneNumber = `${body['userFirstPhoneNumber']} - ${body['userSecondPhoneNumber']} - ${body['userThirdPhoneNumber']}`;
    let adress = `${body['userMiddleAdress']} ${body['userSecondAdress']} ${body['userthirdAdress']}`;

    for (let ph of phones) {
      if (!ph || !ph.length) {
        alert('핸드폰 번호는 필수 입력 사항입니다.');
        return false;
      }
    }

    for (let ad of adresses) {
      if (!ad || !ad.length) {
        alert('주소는 필수 입력 사항입니다.');
        return false;
      }
    }

    addKey('phoneNumber', phoneNumber, body);
    addKey('address', adress, body);
    deleteKey('userFirstPhoneNumber', body);
    deleteKey('userSecondPhoneNumber', body);
    deleteKey('userThirdPhoneNumber', body);
    deleteKey('userMiddleAdress', body);
    deleteKey('userSecondAdress', body);
    deleteKey('userthirdAdress', body);
    deleteKey('allAgreeBox', body);
    deleteKey('userBirthYear', body);
    deleteKey('userBirthMonth', body);
    deleteKey('userBirthDate', body);
    deleteKey('emailAgreeBoxBtn', body);
    deleteKey('useInfoAgreeBtn', body);
    deleteKey('personalInfoAgreeBtn', body);

    const keyMapper = {
      userId: 'idForLogin',
      userFirstAdress: 'name',
      userPassword: 'password',
      userEmail: 'email',
      usertype: 'role',
      emailAgree: 'isEmailAgreed',
      SNSAgree: 'isSnsAgreed',
      useInfoAgree: 'isPrivacyAgreed',
      personalInfoAgree: 'isTermsOfUseAgreed',
    };

    Object.keys(keyMapper).forEach(item => {
      keyNameChanger(item, keyMapper[item], body);
    });
    return true;
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
        emailAgreeBoxBtn,
        usertype,
        userBusiness,
        allAgreeBox,
        useInfoAgree,
        personalInfoAgree,
        emailAgree,
        SNSAgree,
        useInfoAgreeBtn,
        personalInfoAgreeBtn,
      },
    } = this;
    return (
      <div className="SignUp">
        <form onSubmit={onSubmit} className="signUpWrapper">
          <Title className="signUpTitle" title="회원가입" />
          <BasicUserInfoTable
            state={this.state}
            checkBoxController={checkBoxController}
            radioBtnOnClick={radioBtnOnClick}
            usertype={usertype}
            userBusiness={userBusiness}
            onChange={onChange}
          />
          <AdditionalInfoTable onChange={onChange} />
          <AgreePolicyTable
            useInfoAgreeBtn={useInfoAgreeBtn}
            personalInfoAgreeBtn={personalInfoAgreeBtn}
            emailAgreeBoxBtn={emailAgreeBoxBtn}
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

export default withRouter(SignUp);
