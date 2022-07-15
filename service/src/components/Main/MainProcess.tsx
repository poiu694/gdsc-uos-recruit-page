import styled from '@emotion/styled';
import {
  Circle,
  TeamCard,
  theme,
  Title,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';

function MainProcess() {
  return (
    <Wrapper>
      <TitleWrapper>
        <Typography type='h1' textAlign='center'>
          Process
        </Typography>
      </TitleWrapper>
      <Title
        title='Process for Recruit'
        desc1='저희와 함께할 새로운 멤버를 구합니다.'
        desc2='많은 지원 부탁드립니다.'
      />
      <CircleList>
        <CircleItem>
          <Circle type='first' title='서류 접수' date='2022.08.04 월요일' />
        </CircleItem>
        <CircleItem>
          <Circle type='second' title='서류 접수' date='2022.08.04 월요일' />
        </CircleItem>
        <CircleItem>
          <Circle type='third' title='서류 접수' date='2022.08.04 월요일' />
        </CircleItem>
        <CircleItem>
          <Circle type='fourth' title='서류 접수' date='2022.08.04 월요일' />
        </CircleItem>
        <CircleItem>
          <Circle type='fifth' title='서류 접수' date='2022.08.04 월요일' />
        </CircleItem>
      </CircleList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  position: relative;

  margin: 0 auto;

  @media (max-width: ${theme.size.tabletS}px) {
    width: 100%;
  }
`;

const CircleList = styled.ul`
  display: flex;
  justify-content: space-between;

  padding: 0;

  @media (max-width: ${theme.size.tabletL}px) {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: ${theme.size.tabletS}px) {
    width: 53.6rem;
  }

  @media (max-width: ${theme.size.mobile}px) {
    display: grid;
    grid-template-rows: repeat(6, 1fr);
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
        grid-column: 1/3;
      }

      &:nth-of-type(2) {
        grid-column: 3/5;
      }

      &:nth-of-type(3) {
        grid-column: 5/7;
      }

      &:nth-of-type(4) {
        grid-row: 2/3;
        grid-column: 2/4;
      }

      &:last-of-type {
        grid-row: 2/3;
        grid-column: 4/6;
      }
    }

    @media (max-width: ${theme.size.mobile}px) {
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
        grid-column: 1/2;
      }
    }
  };
`;

const TitleWrapper = styled.div`
  margin: 5em 0;
`;

export default MainProcess;
