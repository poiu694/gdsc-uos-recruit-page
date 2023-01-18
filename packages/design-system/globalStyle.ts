import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { theme } from './src/theme';

const globalStyle = css`
  ${emotionReset}

  body {
    font-family: 'Noto Sans KR', sans-serif;
    background-color: ${theme.colors.background};
  }
`;

export default globalStyle;
