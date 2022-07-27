import styled from '@emotion/styled';
import Link from 'next/link';
import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface CustomLink extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface CustomLinkProps extends PropsWithChildren<CustomLink> {}

function CustomLink({ href, children, ...restProps }: CustomLinkProps) {
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
