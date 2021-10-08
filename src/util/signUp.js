import BusinessUserTable from '../pages/SignUp/BusinessUserTable/BusinessUserTable';
import ForeignerUserTable from '../pages/SignUp/ForeignerUserTable/ForeignerUserTable';

export const joinPageComponentsSwitcher = {
  personalUser: () => null,
  businessUser: props => <BusinessUserTable {...props} />,
  foreignerUser: props => <ForeignerUserTable {...props} />,
};

export const policyAgreements = [
  'allAgreeBox',
  'useInfoAgree',
  'personalInfoAgree',
  'emailAgree',
  'SNSAgree',
];
