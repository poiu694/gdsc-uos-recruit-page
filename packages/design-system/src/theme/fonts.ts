import { css } from '@emotion/react';

const desktopFonts = {
  h1: css`
    font-weight: 700;
    font-size: 32px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h2: css`
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h3: css`
    font-weight: 700;
    font-size: 26px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h4: css`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h5: css`
    font-weight: 700;
    font-size: 22px;
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
    font-size: 20px;
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
  body5: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 14px;
  `,
} as const;

const mobileFonts = {
  h1: css`
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h2: css`
    font-weight: 700;
    font-size: 28px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h3: css`
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h4: css`
    font-weight: 700;
    font-size: 22px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h5: css`
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  h6: css`
    font-weight: 700;
    font-size: 16px;
    letter-spacing: -0.015em;
    line-height: 1.4;
  `,
  body1: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 20px;
  `,
  body2: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 18px;
  `,
  body3: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 16px;
  `,
  body4: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 12px;
  `,
  body5: css`
    letter-spacing: -0.018em;
    line-height: 1.6;
    font-size: 10px;
  `,
} as const;

export const fonts = {
  desktop: desktopFonts,
  mobile: mobileFonts,
} as const;

type FontType = typeof fonts.desktop;
export type FontKeyType = keyof FontType;
