declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

  const type: (props: SVGProps<SVGElement>) => ReactElement;
  export default type;
}
