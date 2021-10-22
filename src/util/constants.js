import { API_ENDPOINT } from '../api/api';

export const ERRORS = {
  500: '알수없는 오류가 발생했습니다. 관리자에게 문의하세요',
  400: '잘못된 값을 입력되었습니다.',
};

export const ROUTES = {
  CART: `${API_ENDPOINT}carts`,
  CART_OPTION_CHANGE: id => `product/${id}`,
  CART_RECOMMENT: `${API_ENDPOINT}products/recommend`,
  LOGIN: `${API_ENDPOINT}users/login`,
  SIGNUP: `${API_ENDPOINT}users/signup`,
};

export const BTNAME = {
  RIGHT: 'rightSliderBtn',
  LEFT: 'leftSliderBtn',
  PLUS: 'plusBtn',
  MINUS: 'minusBtn',
};

export const CHECKBOX = {
  CHECKALL: 'checkAll',
};

export const SCREEN_MOVEMENT = {
  COLOR_IMAGE: 780,
  PRODUCT_IMAGE: 660,
};

export const basicImageUrl =
  'https://images.unsplash.com/photo-1565153149760-49d028a7f657?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1296&q=60';
