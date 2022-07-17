import styled from '@emotion/styled';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface CustomLink {
  href: string;
}

interface CustomLinkProps extends PropsWithChildren<CustomLink> {}

function CustomLink({ href, children }: CustomLinkProps) {
  return (
    <Link href={href} passHref>
      <Wrapper>{children}</Wrapper>
    </Link>
  );
}

const Wrapper = styled.a`
  text-decoration: none;
`;

export default CustomLink;
