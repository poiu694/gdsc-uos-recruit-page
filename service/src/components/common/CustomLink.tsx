import styled from '@emotion/styled';
import Link from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface CustomLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
function CustomLink({
  href,
  children,
  ...restProps
}: PropsWithChildren<CustomLinkProps>) {
  return (
    <Link href={href} passHref {...restProps}>
      <Wrapper>{children}</Wrapper>
    </Link>
  );
}

const Wrapper = styled.a`
  text-decoration: none;
`;

export default CustomLink;
