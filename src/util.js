import BusinessUserTable from './pages/SignUp/components/BusinessUserTable/BusinessUserTable';
import ForeignerUserTable from './pages/SignUp/components/ForeignerUserTable/ForeignerUserTable';
import PersonalUserTable from './pages/SignUp/components/PersonalUserTable/PersonalUserTable';

export const joinPageComponentsSwitcher = {
  personalUser: props => <PersonalUserTable {...props} />,
  businessUser: props => <BusinessUserTable {...props} />,
  foreignerUser: props => <ForeignerUserTable {...props} />,
};

export const booleanToNumber = boolean => {
  return boolean ? 1 : 0;
};

export const policyAgreements = [
  'allAgreeBox',
  'useInfoAgree',
  'personalInfoAgree',
  'emailAgree',
  'SNSAgree',
];
