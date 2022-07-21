import type { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import {
  Bottom,
  globalStyle,
  Header,
  theme,
} from '@gdsc-uos-recruit-page/design-system';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const handleLinkToPage = useCallback(
    (url: string) => {
      router.push(url);
    },
    [router]
  );

  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Header
        goMainPage={() => handleLinkToPage('/')}
        goSupportPage={() => handleLinkToPage('/qna/common')}
        goQuestionPage={() => handleLinkToPage('/qna/common')}
      />
      <Component {...pageProps} />
      <Bottom />
    </ThemeProvider>
  );
}

export default MyApp;
