import Link from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
function CustomLink({ href, children, ...restProps }: PropsWithChildren<Props>) {
  const isExternal = /^http/;
  const isMailTo = /^mailto/;
  const hasExternalLink = isExternal.test(href) || isMailTo.test(href);

  return hasExternalLink ? (
    <a href={href} target="_blank" rel="external" {...restProps}>
      {children}
    </a>
  ) : (
    <Link href={href} passHref {...restProps}>
      {children}
    </Link>
  );
}

export default CustomLink;
