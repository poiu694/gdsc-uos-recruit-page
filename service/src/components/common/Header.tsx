import styled from '@emotion/styled';

import { theme } from '@gdsc-uos-recruit-page/design-system/theme';
import { useWindowSize } from '@gdsc-uos-recruit-page/hooks';
import Typography from '@gdsc-uos-recruit-page/design-system/components/Typography';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

const getSrc = (width: number) => {
  if (width <= theme.size.mobile + 50) {
    return '/logo_small.png';
  }
  return '/logo.png';
};

function Header() {
  const windowSize = useWindowSize();
  const [imgSrc, setImgSrc] = useState<string>(getSrc(windowSize.width));
  const router = useRouter();

  const handleLinkToPage = useCallback(
    (url: string) => {
      router.push(url);
    },
    [router]
  );

  useEffect(() => {
    setImgSrc(getSrc(windowSize.width));
  }, [windowSize]);

  return (
    <Wrapper>
      <NavigationWrapper>
        <Logo>
          <Image src={imgSrc} layout='fill' />
        </Logo>
        <Navigation>
          <Typography type='body4' onClick={() => handleLinkToPage('/')}>
            모집 공고
          </Typography>
          <Typography
            type='body4'
            onClick={() => handleLinkToPage('/qna/common')}
          >
            자주 묻는 질문
          </Typography>
          <Typography
            type='body4'
            onClick={() => handleLinkToPage('/qna/common')}
          >
            지원 하기
          </Typography>
        </Navigation>
      </NavigationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  margin: 0 auto;

  position: fixed;
  top: 0;
  z-index: ${theme.zIndex.header};

  display: flex;
  align-items: center;

  -webkit-backdrop-filter: saturate(50%) blur(4px);
  backdrop-filter: blur(4px);
`;

const NavigationWrapper = styled.header`
  width: 80%;
  margin: 0 auto;
`;

const Navigation = styled.div`
  display: flex;
  float: right;

  gap: ${theme.padding.md}px;
  @media (max-width: ${theme.size.mobile}px) {
    gap: 8px;
  }

  .body4 {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  width: 300px;
  height: 40px;

  position: absolute;
  top: 10px;

  cursor: pointer;

  @media (max-width: ${theme.size.mobile}px) {
    width: 40px;
    height: 20px;
    top: 20px;
  }
`;

export default Header;
