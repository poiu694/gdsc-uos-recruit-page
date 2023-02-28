import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { css, useTheme } from '@emotion/react';
import { ClickableIcon, Typography } from 'gdsc-uos-design-system';

import { useGA } from '@/hooks';
import { GOOGLE_FORM_LINK } from '@/constants/form';
import { useThemeContext } from './CustomThemeProvider';

function Header() {
  const theme = useTheme();
  const router = useRouter();
  const { theme: userTheme, toggleTheme } = useThemeContext();
  const isDark = React.useMemo(() => userTheme === 'dark', [userTheme]);
  const { logEvent } = useGA();

  const handleLinkToPage = React.useCallback(
    (url: string) => {
      logEvent('Head', `${url} 로 이동`);
      if (url === GOOGLE_FORM_LINK) {
        if (window) {
          window.open(GOOGLE_FORM_LINK, '_blank');
        }
        return;
      }
      router.push(url);
    },
    [router, logEvent]
  );

  return (
    <Wrapper>
      <NavigationWrapper>
        <Logo onClick={() => handleLinkToPage('/')}>
          <picture>
            <source media={`(max-width: ${theme.size.mobile}px)`} srcSet="/logo_small.png" />
            <img src={isDark ? '/logo_white.png' : '/logo.png'} alt="gdsc-uos-logo" />
          </picture>
        </Logo>
        <Navigation>
          <ClickableIcon
            hoverBackgroundColor={theme.colors.ui.hover}
            iconProps={{
              type: userTheme === 'dark' ? 'moon' : 'sun',
              color: isDark ? theme.colors.primary.yellow : theme.colors.primary.black,
            }}
            onClick={toggleTheme}
          />
          <Typography
            type="body4"
            color={theme.colors.text.general}
            onClick={() => handleLinkToPage('/')}
          >
            모집 공고
          </Typography>
          <Typography
            type="body4"
            color={theme.colors.text.general}
            onClick={() => handleLinkToPage('/qna/common')}
            aria-label="move to common question to gdsc-uos"
          >
            자주 묻는 질문
          </Typography>
          <Typography
            type="body4"
            color={theme.colors.text.general}
            onClick={() => handleLinkToPage('/apply')}
            aria-label="move to apply google-form link"
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
  z-index: ${(props) => props.theme.zIndex.header};
  display: flex;
  align-items: center;
  -webkit-backdrop-filter: saturate(50%) blur(4px);
  backdrop-filter: blur(4px);
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
    align-items: center;

    @media (max-width: ${theme.size.mobile}px) {
      gap: 8px;
    }

    & > div {
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
