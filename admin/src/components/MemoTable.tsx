import styled from '@emotion/styled';
import {
  Chip,
  Table,
  TBody,
  Td,
  THead,
  Tr,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';

interface Props {
  memos: { name: string; label: string }[];
}

function EvaluationTable({ memos }: Props) {
  return (
    <Wrapper>
      <Typography type="h4">메모사항</Typography>
      <TableWrapper>
        <THead>
          <Tr>
            <Td>이름</Td>
            <Td>메모</Td>
          </Tr>
        </THead>
        <TBody>
          {memos?.map((memo) => (
            <Tr key={memo.name}>
              <Td>{memo.name}</Td>
              <Td>{memo.label}</Td>
            </Tr>
          ))}
        </TBody>
      </TableWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 32px;
`;

const TableWrapper = styled(Table)`
  width: 50%;
  margin-top: 12px;

  tr {
    cursor: default;
  }
`;

export default EvaluationTable;
