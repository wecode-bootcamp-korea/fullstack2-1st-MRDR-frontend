import { ERRORS } from './constants';

export const failAlert = code => alert(ERRORS[code]);

export const getFetch = async (url, { actionFunc, failFunc }) => {
  try {
    const authorization = localStorage.getItem('token');
    const response = await fetch(url, {
      headers: { authorization },
    });

    if (typeof actionFunc !== 'function' || typeof failFunc !== 'function')
      return;

    if (response.status < 400) {
      const { data } = await response.json();
      return actionFunc(data);
    }

    failFunc(500);
  } catch (e) {
    failFunc(500);
    console.log(e);
  }
};

export const fetchForCUD = async (
  { method, body, url },
  { actionFunc, failFunc }
) => {
  try {
    const authorization = localStorage.getItem('token');
    const response = await fetch(url, {
      headers: { authorization, 'Content-type': 'Application/json' },
      method,
      body,
    });

    if (response.status > 400) return failFunc();

    const data = await response.json();
    actionFunc(data);
  } catch (e) {
    failFunc(500);
    console.log(e);
  }
};
