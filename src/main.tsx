import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import router from '@/routes';

import { GlobalStyle } from '@/styles/globalStyles.ts';
import theme from '@/styles/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </ThemeProvider>
);
