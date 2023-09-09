import InterestFieldSetup from 'components/InterestFieldSetup/InterestFieldSetup';

const Signup = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        marginTop: '50px',
      }}
    >
      <InterestFieldSetup />
    </div>
  );
};

export default Signup;
