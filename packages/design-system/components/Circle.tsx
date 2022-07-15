import styled from '@emotion/styled';
import { theme } from '../theme';
import Typography from './Typography';

interface Circle {
  type: 'first' | 'second' | 'third' | 'fourth' | 'fifth';
  title: string;
  date: string;
}

function Circle({ type, title, date }: Circle) {
  return (
    <Wrapper className={type}>
      <Title>
        <Typography type='h5' textAlign='center' color={theme.palette.white}>
          {title}
        </Typography>
      </Title>
      <Typography type='body4' textAlign='center' color={theme.palette.gray50}>
        {date}
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 216px;
  height: 216px;
  margin-top: 16px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 50%;

  &.first {
    background: linear-gradient(
      86.91deg,
      ${theme.palette.coreBlue} 2.22%,
      ${theme.palette.blue200} 119.78%
    );
  }

  &.second {
    background: linear-gradient(
      46.16deg,
      ${theme.palette.coreYellow} 15.52%,
      ${theme.palette.yellow200} 108.06%
    );
  }

  &.third {
    background: linear-gradient(
      261deg,
      ${theme.palette.coreRed} 5.56%,
      ${theme.palette.coreBlue} 94.05%
    );
  }

  &.fourth {
    background: linear-gradient(
      306.53deg,
      ${theme.palette.coreGreen} 16.03%,
      ${theme.palette.green200} 96.1%
    );
  }

  &.fifth {
    background: linear-gradient(
      265.27deg,
      ${theme.palette.coreRed} 16.03%,
      ${theme.palette.red200} 96.1%
    );
  }

  @media (max-width: ${theme.size.mobile}px) {
    width: 160px;
    height: 160px;

    &.first {
      background: linear-gradient(
        340.91deg,
        ${theme.palette.coreBlue} 2.22%,
        ${theme.palette.blue200} 119.78%
      );
    }

    &.second {
      background: linear-gradient(
        31.16deg,
        ${theme.palette.coreYellow} 32.52%,
        ${theme.palette.yellow200} 108.06%
      );
    }

    &.third {
      background: linear-gradient(
        340.73deg,
        ${theme.palette.coreRed} 1.75%,
        ${theme.palette.coreBlue} 98.1%
      );
    }

    &.fourth {
      background: linear-gradient(
        126.53deg,
        ${theme.palette.coreGreen} 32.03%,
        ${theme.palette.green200} 98.1%
      );
    }

    &.fifth {
      background: linear-gradient(
        212.27deg,
        ${theme.palette.coreRed} 32.03%,
        ${theme.palette.red200} 96.1%
      );
    }
  }
`;

const Title = styled.div`
  margin-bottom: 8px;
`;

export default Circle;
