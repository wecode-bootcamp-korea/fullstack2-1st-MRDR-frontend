export const ERRORS = {
  500: '알수없는 오류가 발생했습니다. 관리자에게 문의하세요',
  400: '잘못된 값을 입력되었습니다.',
};

export const ROUTES = {
  CART: '/data/cart.json',
  CART_OPTION_CHANGE: id => `/product/${id}`,
  CART_RECOMMENT: '/data/cartRecomment.json',
  LOGIN: 'http://localhost:8000/users/login',
  SIGNUP: 'http://localhost:8000/users/signup',
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
