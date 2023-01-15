import '@emotion/react';
import type { Theme as ThemeModel } from 'gdsc-uos-design-system';

declare module '@emotion/react' {
  export interface Theme extends ThemeModel {}
}
