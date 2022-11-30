import styled from '@emotion/styled';

function Spinner() {
  return (
    <Wrapper>
      <Loader className='loader'>
        <CircleSVG className='circular' viewBox='25 25 50 50'>
          <Circle
            className='path'
            cx='50'
            cy='50'
            r='20'
            fill='none'
            stroke-width='2'
            stroke-miterlimit='10'
          />
        </CircleSVG>
      </Loader>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 5%;
`;

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: $width;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

const CircleSVG = styled.svg`
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Circle = styled.circle`
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
  stroke-linecap: round;

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }

  @keyframes color {
    100%,
    0% {
      stroke: ${({ theme }) => theme.colors.primary.red};
    }
    40% {
      stroke: ${({ theme }) => theme.colors.primary.blue};
    }
    66% {
      stroke: ${({ theme }) => theme.colors.primary.green};
    }
    80% {
      stroke: ${({ theme }) => theme.colors.primary.yellow};
    }
  }
`;

export default Spinner;
