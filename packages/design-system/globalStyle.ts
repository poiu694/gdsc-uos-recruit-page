import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { theme } from './theme';

const globalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2)
        format('woff2'),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff)
        format('woff'),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf)
        format('opentype');
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2)
        format('woff2'),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff)
        format('woff'),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf)
        format('opentype');
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${theme.colors.background};
    font-display: swap;
  }
`;

export default globalStyle;
