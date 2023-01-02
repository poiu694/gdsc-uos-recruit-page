import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import {
  get200Color,
  get400Color,
} from '@gdsc-uos-recruit-page/design-system/utils/colorUtils';

import type { AsideCardType, TeamNameProps } from '../../../@types/';

interface Props extends TeamNameProps {
  aside: AsideCardType;
  handleClickQuestionListBtn: () => void;
  handleClickSupportBtn: () => void;
}

function AsideCard({
  teamName,
  aside,
  handleClickQuestionListBtn,
  handleClickSupportBtn,
}: Props) {
  return (
    <Wrapper>
      <CardWrapper>
        <Line>
          <Typography type="body4" color={theme.palette.gray400}>
            소속
          </Typography>
          <Typography type="body4">{aside.team}</Typography>
        </Line>
        <Line>
          <Typography type="body4" color={theme.palette.gray400}>
            경력사항
          </Typography>
          <Typography type="body4">{aside.experience}</Typography>
        </Line>
        <Line>
          <Typography type="body4" color={theme.palette.gray400}>
            요구사항
          </Typography>
          <Needs>
            {aside.needs.map((need, idx) => (
              <Typography type="body4" key={need}>
                {need}
                {idx !== aside.needs.length - 1 ? ',' : ''}
              </Typography>
            ))}
          </Needs>
        </Line>
      </CardWrapper>
      <ButtonWrapper teamName={teamName}>
        <Typography
          type="h6"
          role="button"
          textAlign="center"
          color={theme.colors.primary.white}
          onClick={handleClickSupportBtn}
        >
          지원 하러 가기
        </Typography>
        <Typography
          type="h6"
          role="button"
          textAlign="center"
          color={theme.colors.team[teamName]}
          onClick={handleClickQuestionListBtn}
        >
          자주 묻는 질문
        </Typography>
      </ButtonWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  ${({ theme }) => css`
    white-space: nowrap;

    @media (max-width: ${theme.size.mobile}px) {
      min-width: 90%;
      margin-top: 32px;

      div.body4 {
        font-size: 14px;
      }
    }
  `}
`;

const CardWrapper = styled.div`
  ${({ theme }) => css`
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
  `}
`;

const Line = styled.span`
  ${({ theme }) => css`
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
  `}
`;

const Needs = styled.span`
  display: flex;
  gap: 4px;
`;

const ButtonWrapper = styled.div<TeamNameProps>`
  ${({ theme, teamName }) => css`
    width: 100%;

    & > div {
      width: 100%;
      padding: 8px;
      margin-top: ${theme.padding.md}px;
      border-radius: 15px;

      cursor: pointer;
    }

    & > div:nth-of-type(1) {
      background-color: ${theme.colors.team[teamName]};
    }

    & > div:last-of-type {
      background-color: ${get200Color(teamName)};
      border: 1px solid ${get400Color(teamName)};
    }

    @media (max-width: ${theme.size.mobile}px) {
      & {
        padding: 0 8px;
      }

      width: 100%;
      display: flex;
      jusitfy-content: space-between;
      gap: 10px;
    }
  `}
`;

export default AsideCard;
