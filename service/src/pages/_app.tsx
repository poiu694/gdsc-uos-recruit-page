import { css, Global } from '@emotion/react';
import type { AppProps } from 'next/app';
import { Suspense, useEffect } from 'react';
import { globalStyle as FontGlobalStyle, theme } from 'gdsc-uos-design-system';

import { useGA } from '@/hooks';
import { Bottom, CustomThemeProvider, Header, ScriptHeader, Spinner } from '@/components/common';
import styled from '@emotion/styled';

const globalStyle = css`
  ${FontGlobalStyle}

  body {
    background-color: ${theme.colors.background};
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const { initGA } = useGA();

  useEffect(() => {
    initGA(process.env.NEXT_PUBLIC_GA_KEY as string);
  }, [initGA]);

  return (
    <CustomThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <ScriptHeader />
      <Header />
      <Suspense fallback={<Spinner />}>
        <BodyBackgroundBox>
          <Component {...pageProps} />
        </BodyBackgroundBox>
      </Suspense>
      <Bottom />
    </CustomThemeProvider>
  );
}

const BodyBackgroundBox = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  overflow-x: hidden;
`;

export default MyApp;
