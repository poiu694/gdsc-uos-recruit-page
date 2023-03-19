import React from 'react';
import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import {
  Icon,
  Input,
  Button,
  Typography,
  TeamKeyType,
  ClickableIcon,
  ButtonHierarchy,
} from '@gdsc-uos/ui';

import TeamList from '@/components/TeamList';
import { INTRODUCTION } from '@/dummy/introduction';

const DEFAULT_TEAM_VALUE = 'frontend';

type Introduction = {
  title: string;
  list: string[];
};

function IntroductionInfoBox() {
  const theme = useTheme();
  const [activeTeam, setActiveTeam] = React.useState<TeamKeyType>(DEFAULT_TEAM_VALUE);
  const [introductionList, setIntroductionList] = React.useState<Introduction[]>(INTRODUCTION);

  const handleClickTeamName = React.useCallback((team: TeamKeyType) => {
    setActiveTeam(team);
  }, []);

  const handleChangeInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, titleIndex: number, itemIndex: number) => {
      const nextIntroductionList = [...introductionList];
      nextIntroductionList[titleIndex].list[itemIndex] = e.target.value;
      setIntroductionList(nextIntroductionList);
    },
    [],
  );

  const handleClickDeleteButton = React.useCallback((titleIndex: number, itemIndex: number) => {
    const nextIntroductionList = [...introductionList];
    nextIntroductionList[titleIndex].list = nextIntroductionList[titleIndex].list.filter(
      (_, idx) => idx !== itemIndex,
    );
    setIntroductionList(nextIntroductionList);
  }, []);

  const handleClickAddFiled = React.useCallback((titleIndex: number) => {
    if (introductionList[titleIndex].list.length < 5) {
      const nextIntroductionList = [...introductionList];
      nextIntroductionList[titleIndex].list = [...nextIntroductionList[titleIndex].list, ''];
      setIntroductionList(nextIntroductionList);
    } else {
      alert('질문에 대한 답변은 5개를 넘어갈 수 없습니다.');
    }
  }, []);

  return (
    <Wrapper>
      <TeamList activeTeam={activeTeam} onClickTeamName={handleClickTeamName} />
      <Content>
        {introductionList.map((introduction, titleIndex) => {
          return (
            <div key={introduction.title}>
              <Typography type="h5" style={{ marginTop: 12 }}>
                {introduction.title}
              </Typography>
              <AnswerList>
                {introduction.list.map((answer, itemIndex) => (
                  <BulletListItem key={itemIndex}>
                    <Typography type="body5">•</Typography>
                    <Input
                      value={answer}
                      onChange={(e) => handleChangeInput(e, titleIndex, itemIndex)}
                      placeholder="소개글을 입력해주세요."
                    />
                    <ClickableIcon
                      iconProps={{
                        type: 'close',
                        color: theme.colors.primary.red,
                      }}
                      onClick={() => handleClickDeleteButton(titleIndex, itemIndex)}
                    />
                  </BulletListItem>
                ))}
                <FiledAddButton
                  hierarchy={ButtonHierarchy.Parent}
                  onClick={() => handleClickAddFiled(titleIndex)}
                >
                  <Icon type="plus" color={theme.colors.primary.red} />
                  <Typography type="body5" color={theme.colors.primary.red}>
                    필드 추가
                  </Typography>
                </FiledAddButton>
              </AnswerList>
            </div>
          );
        })}
        <Button
          hierarchy={ButtonHierarchy.Danger}
          onClick={() => console.log(introductionList)}
          style={{ padding: '8px 20px', marginRight: 16 }}
        >
          <Typography type="body5" color={theme.colors.primary.white} textAlign="end">
            업데이트
          </Typography>
        </Button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 32px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const AnswerList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BulletListItem = styled.li`
  display: flex;
  margin-inline: 16px;
  align-items: center;
  gap: 12px;
`;

const FiledAddButton = styled(Button)`
  ${({ theme }) => css`
    display: flex;
    align-self: center;
    align-items: center;
    transition: all 0.15s ease-in;

    &:hover {
      background-color: ${theme.palette.red100};
    }
  `}
`;

export default React.memo(IntroductionInfoBox);
