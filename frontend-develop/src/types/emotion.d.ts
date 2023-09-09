import '@emotion/react';
import { Palette, TextStylesRecord } from './theme.types';

declare module '@emotion/react' {
  export interface Theme {
    palette: Palette;
    textStyle: TextStylesRecord;
  }
}
