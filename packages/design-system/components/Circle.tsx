import styled from '@emotion/styled';

import { theme } from '../theme';
import Typography from './Typography';

export type ProcessCircleType = 'process-0' | 'process-1' | 'process-2' | 'process-3' | 'process-4';

interface Circle {
  type: ProcessCircleType;
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
  width: 240px;
  height: 240px;
  margin-top: ${theme.padding.md}px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 50%;

  &.process-0 {
    background: linear-gradient(
      46.16deg,
      ${theme.palette.coreYellow} 15.52%,
      ${theme.palette.yellow200} 108.06%
    );
  }

  &.process-1 {
    background: linear-gradient(
      86.91deg,
      ${theme.palette.coreBlue} 2.22%,
      ${theme.palette.blue200} 119.78%
    );
  }

  &.process-4 {
    background: linear-gradient(
      261deg,
      ${theme.palette.coreRed} 5.56%,
      ${theme.palette.coreBlue} 94.05%
    );
  }

  &.process-2 {
    background: linear-gradient(
      265.27deg,
      ${theme.palette.coreRed} 16.03%,
      ${theme.palette.red200} 96.1%
    );
  }

  &.process-3 {
    background: linear-gradient(
      306.53deg,
      ${theme.palette.coreGreen} 16.03%,
      ${theme.palette.green200} 96.1%
    );
  }

  @media (min-width: ${theme.size.tabletL + 300}px) {
    width: 264px;
    height: 264px;
  }

  @media (max-width: ${theme.size.mobile}px) {
    width: 144px;
    height: 144px;

    &.process-0 {
      background: linear-gradient(
        340.91deg,
        ${theme.palette.coreBlue} 2.22%,
        ${theme.palette.blue200} 119.78%
      );
    }

    &.process-1 {
      background: linear-gradient(
        31.16deg,
        ${theme.palette.coreYellow} 32.52%,
        ${theme.palette.yellow200} 108.06%
      );
    }

    &.process-4 {
      background: linear-gradient(
        340.73deg,
        ${theme.palette.coreRed} 1.75%,
        ${theme.palette.coreBlue} 98.1%
      );
    }

    &.process-2 {
      background: linear-gradient(
        126.53deg,
        ${theme.palette.coreGreen} 32.03%,
        ${theme.palette.green200} 98.1%
      );
    }

    &.process-3 {
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
