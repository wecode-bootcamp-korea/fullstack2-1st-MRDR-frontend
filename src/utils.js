export const checkEmailValid = email => {
  const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
  return emailRegexp.test(email);
};

export const checkIdValid = id => {
  const idRegexp = /^[a-z0-9*]{4,12}$/;
  return idRegexp.test(id);
};

export const checkPasswordValid = password => {
  const passwordRegexp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,16}/g;
  return passwordRegexp.test(password);
};
