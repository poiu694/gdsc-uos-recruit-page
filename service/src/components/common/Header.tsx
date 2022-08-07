import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@gdsc-uos-recruit-page/design-system/theme';
import Typography from '@gdsc-uos-recruit-page/design-system/components/Typography';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { useGA } from '@gdsc-uos-recruit-page/hooks';

function Header() {
  const router = useRouter();
  const { logEvent } = useGA();

  const handleLinkToPage = useCallback(
    (url: string) => {
      logEvent('route(head)', `move to ${url}`);
      router.push(url);
    },
    [router, logEvent]
  );

  return (
    <Wrapper>
      <NavigationWrapper>
        <Logo onClick={() => handleLinkToPage('/')}>
          <picture>
            <source
              media={`(max-width: ${theme.size.mobile}px)`}
              srcSet='/logo_small.png'
            />
            <img src='/logo.png' />
          </picture>
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
  padding-top: 10px;

  position: fixed;
  top: 0;
  z-index: ${theme.zIndex.header};

  display: flex;
  align-items: center;

  -webkit-backdrop-filter: saturate(50%) blur(4px);
  backdrop-filter: blur(4px);

  @media (max-width: ${theme.size.mobile}px) {
    div.body4 {
      font-size: 14px;
    }
  }
`;

const NavigationWrapper = styled.header`
  width: 80%;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    float: right;

    gap: ${theme.padding.md}px;
    @media (max-width: ${theme.size.mobile}px) {
      gap: 8px;
    }

    .body4 {
      cursor: pointer;
    }
  `}
`;

const Logo = styled.div`
  ${({ theme }) => css`
    width: 300px;
    height: 40px;

    position: absolute;
    top: 10px;

    cursor: pointer;

    picture,
    picture img {
      width: 100%;
      height: 100%;
      padding-top: 10px;
    }

    @media (max-width: ${theme.size.mobile}px) {
      width: 40px;
      height: 20px;
      top: 20px;
    }
  `}
`;

export default Header;
