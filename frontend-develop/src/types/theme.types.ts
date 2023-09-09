type CommonTextStyles = {
  fontSize: string;
  lineHeight: string;
};

type TextStyles =
  | 'display01'
  | 'display02'
  | 'headLine01'
  | 'headLine02'
  | 'title01'
  | 'title02'
  | 'body01'
  | 'body02'
  | 'label01'
  | 'label02'
  | 'label03'
  | 'caption01'
  | 'caption02';

export type TextStylesRecord = Record<TextStyles, CommonTextStyles>;

export interface Palette {
  orange50: string;
  orange100: string;
  orange200: string;
  orange300: string;
  orange400: string;
  orange500: string;
  orange600: string;
  orange700: string;
  orange800: string;
  orange900: string;

  black50: string;
  black100: string;
  black200: string;
  black300: string;
  black400: string;
  black500: string;
  black600: string;
  black700: string;
  black800: string;
  black900: string;

  background: {
    primary: string;
    secondary: string;
  };

  line: {
    normal: string;
    alternative: string;
  };

  secondary: {
    normal: string;
    strong: string;
    heavy: string;
  };

  status: {
    alert: string;
    caution: string;
    positive: string;
  };
}
