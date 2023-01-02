import styled from '@emotion/styled';
import {
  Circle,
  theme,
  Title,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';
import { ProcessCircleType } from '@gdsc-uos-recruit-page/design-system/components/Circle';
import { defaultDuration } from '@gdsc-uos-recruit-page/hooks/useAOS';

import { TitleOneDesc, TitleTwoDesc } from '../../../@types';

interface Props {
  content: TitleTwoDesc;
  circle: TitleOneDesc[];
}

function MainProcess({ content, circle }: Props) {
  return (
    <Wrapper>
      <TitleWrapper data-aos="fade-up" data-aos-duration={defaultDuration}>
        <Typography type="h1" textAlign="center">
          Process
        </Typography>
      </TitleWrapper>
      <Title
        title={content.title}
        descriptions={[content.desc1, content.desc2]}
        data-aos="fade-up"
        data-aos-duration={defaultDuration}
      />
      <CircleList>
        {circle.map((content, idx) => (
          <CircleItem
            data-aos="fade-up"
            data-aos-duration={defaultDuration}
            key={content.title}
          >
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
  margin-block: 60px;
`;

const CircleList = styled.ul`
  display: flex;
  justify-content: space-between;

  padding: 0;
  margin-top: 3em;

  @media (min-width: ${theme.size.tabletL + 300}px) {
    margin-top: 8em;
  }

  @media (max-width: ${theme.size.tabletL}px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${theme.size.tabletS}px) {
    width: 53.6rem;
  }

  @media (max-width: ${theme.size.mobile}px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
`;

const CircleItem = styled.li`
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

      &:nth-of-type(5) {
        grid-column: 5/7;
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

      &:nth-of-type(5) {
        grid-row: 5/7;
        grid-column: 2/3;
      }
    }
  };
`;

const TitleWrapper = styled.div`
  margin-bottom: 5em;

  @media (max-width: ${theme.size.mobile}px) {
    margin-bottom: 2em;
  }
`;

export default MainProcess;
