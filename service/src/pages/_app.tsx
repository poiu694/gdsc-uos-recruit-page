import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from '@gdsc-uos-recruit-page/design-system';
import { Header, Bottom, ScriptHeader } from '../components/common';
import { useEffect } from 'react';
import { useGA } from '@gdsc-uos-recruit-page/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const { initGA } = useGA();

  useEffect(() => {
    initGA(process.env.NEXT_PUBLIC_GA_KEY as string);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <ScriptHeader />
      <Header />
      <Component {...pageProps} />
      <Bottom />
    </ThemeProvider>
  );
}

export default MyApp;
