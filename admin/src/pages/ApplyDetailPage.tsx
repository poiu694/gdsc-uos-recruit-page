import React from 'react';
import styled from '@emotion/styled';
import { Chip, Title, Button, Typography, ButtonHierarchy, TextArea } from 'gdsc-uos-design-system';

import { DUMMY_APPLICATION } from '@/dummy/apply';
import {
  Flex,
  MemoTable,
  EvaluationTable,
  QuestionAndDescription,
  SelectApplyStateBox,
} from '@/components';
import { convertChipColorByState } from '@/utils';
import { ApplyState, Memo } from '@/@types';

function ApplyDetailPage() {
  const [memo, setMemo] = React.useState<Memo>({ advantage: '', disadvantage: '', question: '' });
  const [info, setInfo] = React.useState<any>();
  const [applyState, setApplyState] = React.useState<ApplyState>(info?.state);

  const handleClickApplyState = (state: ApplyState) => {
    setApplyState(state);
  };

  const handleClickSubmitMemo = async () => {
    console.log(memo);
  };

  React.useEffect(() => {
    setInfo(DUMMY_APPLICATION);
    setApplyState(DUMMY_APPLICATION.status);
  }, []);

  return (
    <Wrapper>
      <Title title="Application" descriptions={`지원서 상세 페이지입니다.`} />
      <Flex gap={10} alignItems="center" style={{ marginTop: 32 }}>
        <Typography type="h4">{info?.name}님의 현재 상태</Typography>
        <Chip variants="filled" label={info?.state} type={convertChipColorByState(info?.state)} />
      </Flex>
      <Typography type="h4" style={{ marginTop: 32 }}>
        자기소개서 문항
      </Typography>
      {info?.questions.map((questionInfo: any) => (
        <QuestionAndDescription
          key={questionInfo.title}
          title={questionInfo.title}
          description={questionInfo.description}
        />
      ))}
      <Typography type="h5" style={{ marginTop: 16 }}>
        메모하기
      </Typography>
      <Flex gap={12} flexDirection="column" alignItems="center" style={{ width: '80%' }}>
        <MemoTextArea
          name="advantage"
          placeholder="장점"
          value={memo.advantage}
          style={{ marginTop: 16 }}
          onChange={(e) => setMemo((prev) => ({ ...prev, advantage: e.target.value }))}
        />
        <MemoTextArea
          name="disadvantage"
          placeholder="단점"
          value={memo.disadvantage}
          onChange={(e) => setMemo((prev) => ({ ...prev, disadvantage: e.target.value }))}
        />
        <MemoTextArea
          name="question"
          placeholder="질문"
          value={memo.question}
          onChange={(e) => setMemo((prev) => ({ ...prev, question: e.target.value }))}
        />
        <Button
          hierarchy={ButtonHierarchy.Warning}
          style={{ padding: 10 }}
          onClick={handleClickSubmitMemo}
        >
          <Typography type="body4" style={{ wordBreak: 'keep-all' }}>
            메모하기
          </Typography>
        </Button>
      </Flex>
      <Typography type="h5" style={{ marginTop: 16 }}>
        평가하기
      </Typography>
      <SelectApplyStateBox value={applyState} onClickState={handleClickApplyState} />
      <Flex flexDirection="column" gap={32} style={{ width: '50%', marginTop: 32 }}>
        <MemoTable memos={info?.memos} name={info?.name} />
        <EvaluationTable name={info?.name} evaluations={info?.evaluations} />
      </Flex>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const MemoTextArea = styled(TextArea)`
  width: 100%;
  min-height: 80px;
`;

export default ApplyDetailPage;
