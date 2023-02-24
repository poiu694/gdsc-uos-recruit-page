import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Button, Typography, useModalContext, ButtonHierarchy } from 'gdsc-uos-design-system';

import { Memo } from '@/@types';
import { Flex } from '@/components/styled';

interface Props {
  name: string;
  memo: Memo;
}

export function UserMemoModal({ name, memo }: Props) {
  const theme = useTheme();
  const { onClose } = useModalContext();

  return (
    <Wrapper>
      <Spacer>
        <Typography type="h6">{name}님이 작성한 메모입니다.</Typography>
        <Flex flexDirection="column" gap={8} style={{ marginTop: 12 }}>
          <Typography type="h6">장점</Typography>
          <Typography type="body4">{memo.advantage}</Typography>
          <Typography type="h6">단점</Typography>
          <Typography type="body4">{memo.disadvantage}</Typography>
          <Typography type="h6">질문</Typography>
          <Typography type="body4">{memo.question}</Typography>
        </Flex>
      </Spacer>
      <BottomButtonList>
        <ConfirmButton hierarchy={ButtonHierarchy.Primary} borderRadius={0} onClick={onClose}>
          <Typography type="body4" textAlign="center" color={theme.colors.primary.white}>
            확인
          </Typography>
        </ConfirmButton>
      </BottomButtonList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 784px;
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
  width: 100%;
  border-radius: 0 0 8px 8px;
  padding: 12px;
`;
