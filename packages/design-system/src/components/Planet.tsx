import styled from '@emotion/styled';
import { CometRain, SolarSystem } from '../asset/svg';
import { theme } from '../theme';

export function Planet() {
  return (
    <Wrapper>
      <CometRain />
      <SolarSystem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${theme.zIndex.background};

  & > svg.animation-scene {
    width: 100%;
  }
`;
