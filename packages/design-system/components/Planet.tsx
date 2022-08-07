import styled from '@emotion/styled';
import { CometRain, SolarSystem } from '../asset/svg';
import { theme } from '../theme';

function Planet() {
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

  svg.animation-scene,
  svg.transition-scene {
    margin: 3em auto;
    z-index: ${theme.zIndex.background};
  }

  svg.animation-scene {
    width: 100%;
  }
`;

export default Planet;
