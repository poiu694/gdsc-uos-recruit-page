import styled from '@emotion/styled';

import { theme } from '../theme';
import Typography from './Typography';

interface HeaderProps {
  goMainPage: () => void;
  goSupportPage: () => void;
  goQuestionPage: () => void;
}

function Header({ goMainPage, goSupportPage, goQuestionPage }: HeaderProps) {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Logo>
          <img src='/logo128.png' alt='logo' />
        </Logo>
        <Navigation>
          <Typography type='body3' onClick={goMainPage}>
            모집 공고
          </Typography>
          <Typography type='body3' onClick={goSupportPage}>
            자주 묻는 질문
          </Typography>
          <Typography type='body3' onClick={goQuestionPage}>
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

  gap: 16px;
  @media (max-width: ${theme.size.mobile}px) {
    gap: 8px;
  }

  .body3 {
    cursor: pointer;
  }
`;

const Logo = styled.div`
  height: 40px;

  position: absolute;
  top: 10px;

  cursor: pointer;

  img {
    max-height: 100%;
  }

  @media (max-width: ${theme.size.mobile}px) {
    width: 50px;
    top: 13px;

    img {
      max-width: 100%;
    }
  }
`;

export default Header;
