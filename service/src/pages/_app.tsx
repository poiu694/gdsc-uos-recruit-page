import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from '@gdsc-uos-recruit-page/design-system';
import { Header, Bottom } from '../components/common';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Header />
      <Component {...pageProps} />
      <Bottom />
    </ThemeProvider>
  );
}

export default MyApp;
