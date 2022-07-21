import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';

import { AsideCard } from '../../../@types/';

interface AsideCardProps {
  aside: AsideCard;
  handleClickQuestionListBtn: () => void;
  handleClickSupportBtn: () => void;
}

function AsideCard({
  aside,
  handleClickQuestionListBtn,
  handleClickSupportBtn,
}: AsideCardProps) {
  return (
    <Wrapper>
      <CardWrapper>
        <Line>
          <Typography type='body4' color={theme.palette.gray200}>
            소속
          </Typography>
          <Typography type='body4'>{aside.team}</Typography>
        </Line>
        <Line>
          <Typography type='body4' color={theme.palette.gray200}>
            경력사항
          </Typography>
          <Typography type='body4'>{aside.experience}</Typography>
        </Line>
        <Line>
          <Typography type='body4' color={theme.palette.gray200}>
            요구사항
          </Typography>
          <Needs>
            {aside.needs.map((need) => (
              <Typography type='body4' key={need}>
                {need}
              </Typography>
            ))}
          </Needs>
        </Line>
      </CardWrapper>
      <ButtonWrapper>
        <Typography
          type='h6'
          role='button'
          textAlign='center'
          color={theme.colors.primary.white}
          onClick={handleClickSupportBtn}
        >
          지원 하러 가기
        </Typography>
        <Typography
          type='h6'
          role='button'
          textAlign='center'
          color={theme.colors.primary.yellow}
          onClick={handleClickQuestionListBtn}
        >
          자주 묻는 질문
        </Typography>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  white-space: nowrap;

  @media (max-width: ${theme.size.mobile}px) {
    min-width: 90%;
    margin-top: 32px;
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  padding: 8px;

  border: 1px solid ${theme.colors.ui.divider};
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  gap: ${theme.padding.md}px;

  span:last-of-type {
    border: 0;
  }
`;

const Line = styled.span`
  display: grid;
  grid-template-columns: 1fr 2fr;

  padding-bottom: 4px;
  border-bottom: 1px solid ${theme.palette.gray50};

  @media (max-width: ${theme.size.tabletL}px) {
    grid-template-columns: 1fr;
    padding-bottom: 8px;
  }

  @media (max-width: ${theme.size.mobile}px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Needs = styled.span`
  display: flex;
  gap: 8px;
`;

const ButtonWrapper = styled.div`
  width: 100%;

  & > div {
    width: 100%;
    padding: 8px;
    margin-top: ${theme.padding.md}px;
    border-radius: 15px;

    cursor: pointer;
  }

  & > div:nth-of-type(1) {
    background-color: ${theme.colors.primary.yellow};
  }

  & > div:last-of-type {
    background-color: ${theme.palette.yellow200};
    border: 1px solid ${theme.palette.yellow400};
  }
`;

export default AsideCard;
