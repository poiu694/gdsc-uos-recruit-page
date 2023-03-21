import '@emotion/react';
import type { Theme as ThemeModel } from '@gdsc-uos/ui';

declare module '@emotion/react' {
  export interface Theme extends ThemeModel {}
}
