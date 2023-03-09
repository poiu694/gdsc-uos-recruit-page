import styled from '@emotion/styled';
import {
  Td,
  Tr,
  Modal,
  Table,
  TBody,
  THead,
  Button,
  Typography,
  ButtonHierarchy,
} from 'gdsc-uos-design-system';
import { useTheme } from '@emotion/react';
import React from 'react';

import { Memo } from '@/@types';
import { UserMemoModal } from './Modal';

interface Props {
  name: string;
  memos: Memo[];
}

function MemoTable({ name, memos }: Props) {
  const theme = useTheme();
  const [isMemoOpen, setIsMemoOpen] = React.useState<boolean>(false);
  const [selectedMemo, setSelectedMemo] = React.useState<Memo | null>(null);

  const handleClickMemoButton = (memo: Memo) => {
    setSelectedMemo(memo);
    setIsMemoOpen(true);
  };

  return (
    <Wrapper>
      <Typography type="h4">메모사항</Typography>
      <TableWrapper>
        <THead>
          <Tr>
            <Td>이름</Td>
            <Td>메모 보기</Td>
          </Tr>
        </THead>
        <TBody>
          {memos?.map((memo, idx) => (
            <Tr key={idx}>
              <Td>{name}</Td>
              <Td>
                <Button
                  style={{ padding: 8 }}
                  hierarchy={ButtonHierarchy.Success}
                  onClick={() => handleClickMemoButton(memo)}
                >
                  <Typography type="body5" color={theme.colors.primary.white}>
                    메모 열람
                  </Typography>
                </Button>
              </Td>
            </Tr>
          ))}
        </TBody>
      </TableWrapper>
      {
        <Modal isOpen={isMemoOpen} onClose={() => setIsMemoOpen(false)}>
          <UserMemoModal memo={selectedMemo!} name={name} />
        </Modal>
      }
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const TableWrapper = styled(Table)`
  width: 100%;
  margin-top: 12px;

  tr {
    cursor: default;
  }
`;

export default MemoTable;
