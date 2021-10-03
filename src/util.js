import BusinessUserTable from './pages/SignUp/components/BusinessUserTable/BusinessUserTable';
import ForeignerUserTable from './pages/SignUp/components/ForeignerUserTable/ForeignerUserTable';
import PersonalUserTable from './pages/SignUp/components/PersonalUserTable/PersonalUserTable';

export const joinPageComponentsSwitcher = {
  0: props => <PersonalUserTable {...props} />,
  1: props => <BusinessUserTable {...props} />,
  2: props => <ForeignerUserTable {...props} />,
};
