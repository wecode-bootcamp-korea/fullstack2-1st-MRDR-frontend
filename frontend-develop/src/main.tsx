import React from 'react';

import { ThemeProvider } from '@emotion/react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { GlobalStyles } from 'styles/globalStyles.tsx';
import theme from 'styles/theme.ts';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>,
);
