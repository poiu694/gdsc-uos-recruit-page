import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { Circle, ProcessCircleType, Title, Typography } from 'gdsc-uos-design-system';

import { TitleWithDescription } from '@types';
import { defaultDuration } from '@/hooks/useAOSSideEffect';

interface Props {
  content: TitleWithDescription;
  circle: TitleWithDescription[];
}

function MainProcess({ content, circle }: Props) {
  const theme = useTheme();

  return (
    <Wrapper>
      <TitleWrapper data-aos="fade-up" data-aos-duration={defaultDuration}>
        <Typography type="h1" textAlign="center" color={theme.colors.text.bold}>
          Process
        </Typography>
      </TitleWrapper>
      <Title
        title={content.title}
        descriptions={content.desc}
        data-aos="fade-up"
        data-aos-duration={defaultDuration}
      />
      <CircleList>
        {circle.map((content, idx) => (
          <CircleItem data-aos="fade-up" data-aos-duration={defaultDuration} key={content.title}>
            <Circle
              type={`process-${idx}` as ProcessCircleType}
              title={content.title}
              date={content.desc}
            />
          </CircleItem>
        ))}
      </CircleList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

const CircleList = styled.ul`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    padding: 0;
    margin-top: 48px;

    @media (min-width: ${theme.size.tabletL + 300}px) {
      margin-top: 96px;
    }

    @media (max-width: ${theme.size.tabletL}px) {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${theme.size.mobile}px) {
      display: grid;
      grid-template-rows: repeat(2, 1fr);
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
    }
  `}
`;

const CircleItem = styled.li`
  ${({ theme }) => css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.size.tabletL}px) {
      width: 100%;

      &:first-of-type {
        grid-row: 1/2;
        grid-column: 1/1;
      }

      &:nth-of-type(2) {
        grid-row: 2/2;
        grid-column: 4/1;
      }

      &:nth-of-type(3) {
        grid-row: 1/2;
        grid-column: 8/2;
      }

      &:nth-of-type(4) {
        grid-row: 2/2;
        grid-column: 12/4;
      }
    }

    @media (max-width: ${theme.size.tabletS}px) {
      &:nth-of-type(1) {
        grid-row: 1/3;
        grid-column: 1/2;
      }

      &:nth-of-type(2) {
        grid-row: 2/4;
        grid-column: 2/3;
      }

      &:nth-of-type(3) {
        grid-row: 3/5;
        grid-column: 1/2;
      }

      &:nth-of-type(4) {
        grid-row: 4/6;
        grid-column: 2/3;
      }
    }
  }`}
`;

const TitleWrapper = styled.div`
  ${({ theme }) => css`
    margin-bottom: 90px;

    @media (max-width: ${theme.size.mobile}px) {
      margin-bottom: 32px;
    }
  `}
`;

export default MainProcess;
