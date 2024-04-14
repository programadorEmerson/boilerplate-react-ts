import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#000000',
    secondary: '#F7F3EE',
    accent: '#FF7400',
    background: '#ECF1ED',
    text: {
      primary: '#0000',
      secondary: '#212121',
      disabled: '#ECEFF1',
      inverse: '#1194C6',
    },
    button: {
      text: '#F7F3EE',
      background: '#FF7400',
      hover: '#FCA311',
      disabled: '#CFD8DC',
    },
    common: {
      black: '#000',
      white: '#FFF',
    },
    border: '#ECEFF1',
    error: '#D32F2F',
    success: '#388E3C',
    warning: '#FBC02D',
    info: '#00B4FE',
  },
  media: {
    mobile: '@media (max-width: 767px)',
  },
  font: {
    family: 'Inter, sans-serif',
    sizes: {
      small: '0.8rem',
      medium: '1rem',
      large: '1.2rem',
    },
  }
};

export default theme;
