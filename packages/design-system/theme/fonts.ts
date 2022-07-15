import { css } from '@emotion/react';

export const fonts = {
  h1: css`
    font-weight: 700;
    font-size: 48px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h2: css`
    font-weight: 700;
    font-size: 40px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h3: css`
    font-weight: 700;
    font-size: 36px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h4: css`
    font-weight: 700;
    font-size: 32px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h5: css`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h6: css`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  body1: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 32px;
  `,
  body2: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 24px;
  `,
  body3: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 20px;
  `,
  body4: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 16px;
  `,
} as const;

type FontType = typeof fonts;
export type FontKeyType = keyof FontType;