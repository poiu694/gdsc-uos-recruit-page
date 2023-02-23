import React from 'react';
import styled from '@emotion/styled';
import {
  Icon,
  theme,
  Input,
  Button,
  TextArea,
  Typography,
  TeamKeyType,
  ButtonHierarchy,
} from 'gdsc-uos-design-system';

import { Flex } from '@/components/styled';
import TeamList from '@/components/TeamList';
import { QUESTIONS } from '@/dummy/apply';

const DEFAULT_TEAM_VALUE = 'common';

type Question = {
  title: string;
  maxLength: number;
  required: boolean;
};

function ApplyQuestionInfoBOx() {
  const [activeTeam, setActiveTeam] = React.useState<TeamKeyType>(DEFAULT_TEAM_VALUE);
  const [questionList, setQuestionList] = React.useState<Question[]>(QUESTIONS);

  const handleClickTeamName = (team: TeamKeyType) => {
    setActiveTeam(team);
  };

  const handleChangeInput = <T extends string | number>(
    nextValue: T,
    targetIndex: number,
    property: keyof Question
  ) => {
    const nextQuestionList = [...questionList];
    nextQuestionList[targetIndex][property] =
      property === 'required'
        ? (!nextQuestionList[targetIndex][property] as never)
        : (nextValue as never);
    setQuestionList(nextQuestionList);
  };

  const handleClickAddFiled = () => {
    const nextQuestionList = [...questionList, { title: '', maxLength: 0, required: false }];
    setQuestionList(nextQuestionList);
  };

  const handleClickDeleteFiled = (targetIndex: number) => {
    const nextQuestionList = [...questionList].filter((_, idx) => idx !== targetIndex);
    setQuestionList(nextQuestionList);
  };

  return (
    <Wrapper>
      <TeamList
        isCommonNeed
        isCoreNeed
        activeTeam={activeTeam}
        onClickTeamName={handleClickTeamName}
      />
      <Content>
        {questionList.map((question, idx) => {
          return (
            <Row key={idx} gap={16}>
              <TextArea
                label={'질문'}
                value={question.title}
                onChange={(e) => handleChangeInput<string>(e.target.value, idx, 'title')}
              />
              <Option gap={8} flexDirection="column" style={{ flexShrink: 0, width: 160 }}>
                <Flex alignItems="center">
                  <Description type="body5">필수여부</Description>
                  <Input
                    type="checkbox"
                    checked={question.required}
                    onChange={(e) => handleChangeInput<string>(e.target.value, idx, 'required')}
                  />
                </Flex>
                <Flex alignItems="center">
                  <Description type="body5">글자수</Description>
                  <Input
                    type="number"
                    value={question.maxLength}
                    style={{ flexShrink: 0, width: 70 }}
                    onChange={(e) => handleChangeInput<string>(e.target.value, idx, 'maxLength')}
                  />
                </Flex>
                <HoverButton
                  onClick={() => handleClickDeleteFiled(idx)}
                  hierarchy={ButtonHierarchy.Parent}
                >
                  <Flex alignItems="center">
                    <Icon type="close" color={theme.colors.primary.red} />
                    <Typography type="body5" color={theme.colors.primary.red}>
                      필드 삭제
                    </Typography>
                  </Flex>
                </HoverButton>
              </Option>
            </Row>
          );
        })}
        <HoverButton hierarchy={ButtonHierarchy.Parent} onClick={handleClickAddFiled}>
          <Icon type="plus" color={theme.colors.primary.red} />
          <Typography type="body5" color={theme.colors.primary.red}>
            필드 추가
          </Typography>
        </HoverButton>
        <Button
          hierarchy={ButtonHierarchy.Danger}
          onClick={() => console.log(questionList)}
          style={{
            padding: '8px 20px',
            marginTop: 16,
          }}
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
  gap: 12px;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`;

const Row = styled(Flex)`
  display: inline-flex;
  width: 95%;
  margin-top: 12px;
  min-height: 140px;
  align-items: center;

  textarea {
    height: 80px;
  }
`;

const Option = styled(Flex)`
  padding-top: 16px;
`;

const Description = styled(Typography)`
  width: 120px;
  flex-grow: 0;
`;

const HoverButton = styled(Button)`
  display: flex;
  align-items: center;
  transition: all 0.15s ease-in;

  &:hover {
    background-color: ${theme.palette.red100};
  }
`;

export default ApplyQuestionInfoBOx;
