// theme.d.ts
import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        inverse: string;
      };
      button: {
        text: string;
        background: string;
        hover: string;
        disabled: string;
      };
      border: string;
      error: string;
      success: string;
      warning: string;
      info: string;
      common: {
        white: string;
        black: string;
      };
    };
    media: {
      mobile: string;
    };
    font: {
      family: string;
      sizes: {
        small: string;
        medium: string;
        large: string;
      };
    };
  }
}
