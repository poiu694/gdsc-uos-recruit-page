import styled from '@emotion/styled';
import { theme } from '../theme';
import Typography from './Typography';

function Header() {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Logo>
          <img src='/logo128.png' alt='logo' />
        </Logo>
        <Navigation>
          <Typography type='h5'>모집 공고</Typography>
          <Typography type='h5'>자주 묻는 질문</Typography>
          <Typography type='h5'>지원 하기</Typography>
        </Navigation>
      </NavigationWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  margin: 0 auto;

  position: sticky;
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
`;

const Logo = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;

  @media (max-width: ${theme.size.mobile}px) {
    width: 50px;
    top: 13px;

    img {
      max-width: 100%;
    }
  }
`;

export default Header;
