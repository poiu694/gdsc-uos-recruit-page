import styled from '@emotion/styled';
import React from 'react';
import { theme } from '../../theme';
import Button, { ButtonHierarchy } from '../Button';
import Input from '../Input';
import Typography from '../Typography';
import { useModalContext } from './ModalContext';

interface Props {
  teamName: string;
  onClickCancel?: () => void;
  onClickConfirm?: ({
    title,
    answer,
  }: {
    title: string;
    answer: string;
  }) => void;
}

function QNAGeneratorModal({
  teamName,
  onClickCancel: _onClickCancle,
  onClickConfirm: _onClickConfirm,
}: Props) {
  const [title, setTitle] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');
  const { onClose } = useModalContext();

  const onClickCancle = () => {
    if (typeof _onClickCancle !== 'undefined') {
      _onClickCancle();
    }
    onClose();
  };

  const onClickConfirm = () => {
    if (typeof _onClickConfirm !== 'undefined') {
      _onClickConfirm({ title, answer });
    }
    onClose();
  };

  return (
    <Wrapper>
      <Spacer>
        <Typography type="h6">
          {teamName}팀의 새로 질문 및 답변을 입력해주세요.
        </Typography>
        <Typography type="body4" style={{ paddingTop: 32 }}>
          질문
        </Typography>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Typography type="body4" style={{ paddingTop: 8 }}>
          답변
        </Typography>
        <AnswerTextArea
          required
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </Spacer>
      <BottomButtonList>
        <CancleButton
          hierarchy={ButtonHierarchy.Danger}
          borderRadius={0}
          onClick={onClickCancle}
        >
          <Typography
            type="body4"
            textAlign="center"
            color={theme.colors.primary.white}
          >
            취소
          </Typography>
        </CancleButton>
        <ConfirmButton
          hierarchy={ButtonHierarchy.Primary}
          borderRadius={0}
          onClick={onClickConfirm}
        >
          <Typography
            type="body4"
            textAlign="center"
            color={theme.colors.primary.white}
          >
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

const AnswerTextArea = styled.textarea`
  width: 500px;
  height: 200px;
  resize: none;
`;

export default QNAGeneratorModal;
