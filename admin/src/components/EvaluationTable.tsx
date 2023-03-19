import styled from '@emotion/styled';
import { Chip, Table, TBody, Td, THead, Tr, Typography } from '@gdsc-uos/ui';

import { ApplyState } from '@/@types';
import { convertChipColorByState } from '@/utils';

interface Props {
  name: string;
  evaluations: { name: string; status: ApplyState }[];
}

function EvaluationTable({ name, evaluations }: Props) {
  return (
    <Wrapper>
      <Typography type="h4">{name}님 평가 기록</Typography>
      <TableWrapper>
        <THead>
          <Tr>
            <Td>이름</Td>
            <Td>결과</Td>
          </Tr>
        </THead>
        <TBody>
          {evaluations?.map((evaluation, idx) => (
            <Tr key={idx}>
              <Td>{evaluation.name}</Td>
              <Td>
                <Chip
                  variants="filled"
                  label={evaluation.status}
                  type={convertChipColorByState(evaluation.status)}
                />
              </Td>
            </Tr>
          ))}
        </TBody>
      </TableWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const TableWrapper = styled(Table)`
  margin-top: 12px;

  tr {
    cursor: default;
  }
`;

export default EvaluationTable;
