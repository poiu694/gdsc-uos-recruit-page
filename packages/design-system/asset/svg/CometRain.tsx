import styled from '@emotion/styled';
import { theme } from '../../theme';

function CometRain({ ...restProps }) {
  return (
    <Wrapper>
      <svg
        role="presentation"
        id="svg-comet"
        className="svg-defs"
        data-name="comet"
        viewBox="0 0 195 173.05"
        width="195"
        height="173.05"
        {...restProps}
      >
        <symbol id="comet">
          <path d="M192.39.66c-33.66,31.46-93.3,81.16-129,108.88L3.42,156c-5,3.89-4.29,11.28.74,15.4s12.84-.83,13.1-1.07C51.09,138.62,82.6,104.72,116.64,73c8.89-8.29,66.23-59.5,77.47-70.13C196.17,1,194.24-1.08,192.39.66Z" />
        </symbol>
      </svg>

      <svg role="presentation" width="0" height="0">
        <defs>
          <linearGradient
            id="gradient"
            x1="194.94"
            y1="4.2"
            x2="11.72"
            y2="161.98"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0%"
              stopColor={`${theme.colors.primary.white}`}
              stopOpacity="0.1"
            ></stop>
            <stop offset="100%" stopColor={`${theme.palette.red200}`}></stop>
          </linearGradient>
        </defs>
      </svg>

      <Comet
        role="presentation"
        className="comet-01 comet-instance"
        width="195"
        height="173.05"
        viewBox="0 0 195 173.05"
      >
        <use xlinkHref="#comet" />
      </Comet>

      <Comet
        role="presentation"
        className="comet-02 comet-instance"
        width="195"
        height="173.05"
        viewBox="0 0 195 173.05"
      >
        <use xlinkHref="#comet" />
      </Comet>

      <Comet
        role="presentation"
        className="comet-03 comet-instance"
        width="195"
        height="173.05"
        viewBox="0 0 195 173.05"
      >
        <use xlinkHref="#comet" />
      </Comet>

      <Comet
        role="presentation"
        className="comet-04 comet-instance"
        width="195"
        height="173.05"
        viewBox="0 0 195 173.05"
      >
        <use xlinkHref="#comet" />
      </Comet>

      <Comet
        role="presentation"
        className="comet-05 comet-instance"
        width="195"
        height="173.05"
        viewBox="0 0 195 173.05"
      >
        <use xlinkHref="#comet" />
      </Comet>

      <Comet
        role="presentation"
        className="comet-06 comet-instance"
        width="195"
        height="173.05"
        viewBox="0 0 195 173.05"
      >
        <use xlinkHref="#comet" />
      </Comet>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;

  .svg-defs {
    display: none;
  }
`;

const Comet = styled.svg`
  width: 5vmin;
  height: auto;
  position: absolute;
  top: 0;
  right: -10vw;

  transform: scale(0);
  fill: ${theme.palette.coreRed};

  @media (prefers-reduced-motion: no-preference) {
    &.comet-instance {
      animation: MakeItRain 8s infinite;
    }

    &.comet-01 {
      right: 40vw;
      animation-delay: 10s;
    }

    &.comet-02 {
      right: 20vw;
      animation-delay: 9s;
    }

    &.comet-03 {
      right: 30vw;
      animation-delay: 6s;
    }

    &.comet-04 {
      top: 5vh;
      animation-delay: 8s;
    }

    &.comet-05 {
      top: 10vh;
      animation-delay: 5s;
    }

    &.comet-06 {
      top: 20vh;
      animation-delay: 3s;
    }

    @keyframes MakeItRain {
      0% {
        opacity: 0;
        transform: scale(0) translate(0, 0);
      }
      100% {
        opacity: 1;
        transform: scale(1) translate(-101vw, 101vh);
      }
    }
`;

export default CometRain;
