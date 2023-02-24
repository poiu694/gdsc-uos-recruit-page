import { Suspense, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle, theme } from 'gdsc-uos-design-system';

import { useGA } from '@/hooks';
import { Bottom, Header, ScriptHeader, Spinner } from '@/components/common';

function MyApp({ Component, pageProps }: AppProps) {
  const { initGA } = useGA();

  useEffect(() => {
    initGA(process.env.NEXT_PUBLIC_GA_KEY as string);
  }, [initGA]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <ScriptHeader />
      <Header />
      <Suspense fallback={<Spinner />}>
        <Component {...pageProps} />
      </Suspense>
      <Bottom />
    </ThemeProvider>
  );
}

export default MyApp;
