<<<<<<< HEAD
export const booleanToNumber = boolean => {
  return boolean ? 1 : 0;
};
=======
import BusinessUserTable from './pages/SignUp/components/BusinessUserTable/BusinessUserTable';
import ForeignerUserTable from './pages/SignUp/components/ForeignerUserTable/ForeignerUserTable';

export const joinPageComponentsSwitcher = {
  personalUser: () => null,
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
>>>>>>> main
