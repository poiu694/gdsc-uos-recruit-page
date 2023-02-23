import React from 'react';
import styled from '@emotion/styled';
import {
  Chip,
  theme,
  Title,
  Button,
  Typography,
  ButtonHierarchy,
  Modal,
} from 'gdsc-uos-design-system';

import { ApplyState } from '@/@types';
import { convertChipColorByState } from '@/utils';
import { DUMMY_APPLICATION } from '@/dummy/apply';
import {
  ContentWrapper,
  Flex,
  InterviewGeneratorModal,
  SelectApplyStateBox,
  SideMenu,
} from '../components';

function InterviewRecordPage() {
  const [info, setInfo] = React.useState<any>();
  const [applyState, setApplyState] = React.useState<ApplyState>(info?.state);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleClickApplyState = (state: ApplyState) => {
    setApplyState(state);
  };

  React.useEffect(() => {
    setInfo(DUMMY_APPLICATION);
  }, []);

  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title title="Application" descriptions={`면접 기록 상세 페이지입니다.`} />
        <Flex gap={10} alignItems="center" style={{ marginTop: 32 }}>
          <Typography type="h4">{info?.name}님의 현재 상태</Typography>
          <Chip variants="filled" label={info?.state} type={convertChipColorByState(info?.state)} />
        </Flex>
        <Flex justifyContent="space-between" style={{ width: '80%', marginTop: 32 }}>
          <Typography type="h5">면접 기록</Typography>
          <Button hierarchy={ButtonHierarchy.Danger} onClick={() => setIsModalOpen(true)}>
            <Typography type="body4" color={theme.colors.primary.white}>
              추가 하기
            </Typography>
          </Button>
        </Flex>
        <Typography type="body4" style={{ marginTop: 16, width: '80%' }}>
          {info?.questions[0].answer}
          {info?.questions[0].answer}
          {info?.questions[0].answer}
        </Typography>
        <Typography type="h5" style={{ marginTop: 16 }}>
          평가하기
        </Typography>
        <SelectApplyStateBox value={applyState} onClickState={handleClickApplyState} />
      </ContentWrapper>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <InterviewGeneratorModal name={'홍길동'} onClickConfirm={() => console.log('hi')} />
      </Modal>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

export default InterviewRecordPage;
