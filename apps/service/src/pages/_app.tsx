import type { AppProps } from 'next/app';
import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { css, Global } from '@emotion/react';
import { globalStyle as FontGlobalStyle, theme } from '@gdsc-uos/ui';

import { useGA } from '@/hooks';
import { Bottom, CustomThemeProvider, Header, ScriptHeader, Spinner } from '@/components/common';
import styled from '@emotion/styled';

const globalStyle = css`
  ${FontGlobalStyle}

  body {
    overscroll-behavior: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [isReadyRender, setIsReadyRender] = React.useState(
    process.env.NEXT_PUBLIC_API_MOCKING !== 'enable',
  );
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  const { initGA } = useGA();

  React.useEffect(() => {
    async function setUpMSW() {
      const { initMocks } = await import('@gdsc-uos/api');
      await initMocks();
      setIsReadyRender(true);
    }

    if (
      process.env.NODE_ENV === 'development' &&
      process.env.NEXT_PUBLIC_API_MOCKING === 'enable'
    ) {
      setUpMSW();
    }
  }, []);

  React.useEffect(() => {
    initGA(process.env.NEXT_PUBLIC_GA_KEY as string);
  }, [initGA]);

  if (!isReadyRender) {
    return null;
  }

  return (
    <CustomThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyle} />
        <ScriptHeader />
        <Header />
        <Suspense fallback={<Spinner />}>
          <BodyBackgroundBox>
            <Component {...pageProps} />
          </BodyBackgroundBox>
        </Suspense>
        <Bottom />
      </QueryClientProvider>
    </CustomThemeProvider>
  );
}

const BodyBackgroundBox = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  overflow-x: hidden;
`;

export default MyApp;
