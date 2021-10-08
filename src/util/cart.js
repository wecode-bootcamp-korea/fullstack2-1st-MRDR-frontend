import { ERRORS } from './constants';

export const failAlert = code => alert(ERRORS[code]);
