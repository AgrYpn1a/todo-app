import React from 'react';
import type { AppProps } from 'next/app';
import emotionReset from 'emotion-reset';
import { css, Global, ThemeProvider } from '@emotion/react';
import theme from '../lib/theme';
import { AuthProvider } from 'src/lib/contexts/AuthContext';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const a = 3;
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *,
          *::after,
          *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
          body {
            font-family: 'Montserrat', sans-serif;
          }
        `}
      />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
