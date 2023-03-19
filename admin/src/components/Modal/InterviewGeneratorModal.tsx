import React from 'react';
import styled from '@emotion/styled';
import { Button, TextArea, Typography, useModalContext, ButtonHierarchy } from '@gdsc-uos/ui';
import { useTheme } from '@emotion/react';

interface Props {
  name: string;
  onClickCancel?: () => void;
  onClickConfirm?: () => void;
}

export function InterviewGeneratorModal({
  name,
  onClickCancel: _onClickCancle,
  onClickConfirm: _onClickConfirm,
}: Props) {
  const theme = useTheme();
  const [record, setRecord] = React.useState<string>('');
  const { onClose } = useModalContext();

  const onClickCancle = () => {
    if (typeof _onClickCancle !== 'undefined') {
      _onClickCancle();
    }
    onClose();
  };

  const onClickConfirm = () => {
    if (record === '') {
      alert('인터뷰 내용이 비어있습니다.');
      return;
    }
    if (typeof _onClickConfirm !== 'undefined') {
      _onClickConfirm();
    }
    onClose();
  };

  return (
    <Wrapper>
      <Spacer>
        <Typography type="h6">{name}님의 인터뷰 내용을 적어주세요.</Typography>
        <AnswerTextArea
          required
          value={record}
          label="답변"
          onChange={(e) => setRecord(e.target.value)}
        />
      </Spacer>
      <BottomButtonList>
        <CancleButton hierarchy={ButtonHierarchy.Danger} borderRadius={0} onClick={onClickCancle}>
          <Typography type="body4" textAlign="center" color={theme.colors.primary.white}>
            취소
          </Typography>
        </CancleButton>
        <ConfirmButton
          hierarchy={ButtonHierarchy.Primary}
          borderRadius={0}
          onClick={onClickConfirm}
        >
          <Typography type="body4" textAlign="center" color={theme.colors.primary.white}>
            생성
          </Typography>
        </ConfirmButton>
      </BottomButtonList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 8px;
`;

const Spacer = styled.section`
  padding: 40px;
  padding-bottom: 80px;
`;

const BottomButtonList = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
`;

const ConfirmButton = styled(Button)`
  width: 50%;
  border-radius: 0 0 8px 0;
  padding: 12px;
`;

const CancleButton = styled(Button)`
  width: 50%;
  border-radius: 0 0 0 8px;
  padding: 12px;
`;

const AnswerTextArea = styled(TextArea)`
  width: 500px;
  height: 200px;
`;
