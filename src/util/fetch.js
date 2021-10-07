import { ERRORS } from './constances';

export const getFetch = async (url, { actioinFunc, failFunc }) => {
  try {
    const authorization = localStorage.getItem('token');
    const response = await fetch(url, {
      headers: { authorization },
    });

    if (response.status < 400) {
      const { data } = await response.json();
      return actioinFunc(data);
    }

    failFunc();
  } catch (e) {
    console.log(e);
    return alert(ERRORS[500]);
  }
};
