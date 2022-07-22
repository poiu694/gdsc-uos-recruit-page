import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

/* TODOS: add defualt value */
const globalStyle = css`
  ${emotionReset}

  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

  font-family: 'Noto Sans KR', sans-serif;
`;

export default globalStyle;
