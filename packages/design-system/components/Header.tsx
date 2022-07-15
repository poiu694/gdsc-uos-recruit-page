import styled from '@emotion/styled';
import { theme } from '../theme';
import Typography from './Typography';

function Header() {
  return (
    <Wrapper>
      <NavigationWrapper>
        <Logo>
          <div>Logo</div>
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
`;

const Logo = styled.div`
  @media (min-width: ${theme.size.mobile}px) {
    display: none;
  }

  @media (min-width: ${theme.size.tabletS}px) {
    display: block;
  }
`;

export default Header;
