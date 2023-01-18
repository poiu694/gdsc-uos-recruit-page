import React from 'react';
import styled from '@emotion/styled';
import {
  Chip,
  Input,
  Title,
  Button,
  Typography,
  ButtonHierarchy,
} from 'gdsc-uos-design-system';

import { DUMMY_APPLICATION } from '../dummy/apply';
import {
  ContentWrapper,
  EvaluationTable,
  Flex,
  MemoTable,
  QuestionAndAnswer,
  SelectApplyStateBox,
  SideMenu,
} from '../components';
import { convertChipColorByState } from '../utils';
import { ApplyState } from '../@types';

function ApplyDetailPage() {
  const [memo, setMemo] = React.useState<string>('');
  const [info, setInfo] = React.useState<any>();
  const [applyState, setApplyState] = React.useState<ApplyState>(info?.state);

  const handleClickApplyState = (state: ApplyState) => {
    setApplyState(state);
  };

  React.useEffect(() => {
    setInfo(DUMMY_APPLICATION);
    setApplyState(DUMMY_APPLICATION.state);
  }, []);

  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title title="Application" descriptions={`지원서 상세 페이지입니다.`} />
        <Flex gap={10} alignItems="center" style={{ marginTop: 32 }}>
          <Typography type="h4">{info?.name}님의 현재 상태</Typography>
          <Chip
            variants="filled"
            label={info?.state}
            type={convertChipColorByState(info?.state)}
          />
        </Flex>
        <Typography type="h4" style={{ marginTop: 32 }}>
          자기소개서 문항
        </Typography>
        {info?.questions.map((questionInfo: any) => (
          <QuestionAndAnswer
            key={questionInfo.title}
            title={questionInfo.title}
            answer={questionInfo.answer}
          />
        ))}
        <Typography type="h5" style={{ marginTop: 16 }}>
          메모하기
        </Typography>
        <Flex gap={12} alignItems="center" style={{ width: '50%' }}>
          <Input
            name="memo"
            value={memo}
            placeholder="memo"
            onChange={(e) => setMemo(e.target.value)}
          />
          <Button
            hierarchy={ButtonHierarchy.Warning}
            type="button"
            style={{ padding: 10 }}
          >
            <Typography type="body4" style={{ wordBreak: 'keep-all' }}>
              메모하기
            </Typography>
          </Button>
        </Flex>
        <Typography type="h5" style={{ marginTop: 16 }}>
          평가하기
        </Typography>
        <SelectApplyStateBox
          value={applyState}
          onClickState={handleClickApplyState}
        />
        <Flex gap={32} style={{ marginTop: 32 }}>
          <MemoTable memos={info?.memos} />
          <EvaluationTable name={info?.name} evaluations={info?.evaluations} />
        </Flex>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default ApplyDetailPage;
