import styled from '@emotion/styled';

import { theme } from '../../theme';
import { Typography } from '../Typography';

interface Props {
  page: number;
  totalCount: number;
  pageSize: number;
  pageSizeOptions: number[];
  onPageSizeOptionsChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function TablePagination({
  page,
  pageSize,
  totalCount,
  pageSizeOptions,
  onPageSizeOptionsChange,
}: Props) {
  return (
    <Wrapper>
      <Typography type="body4" textAlign="end">
        Rows per page:
      </Typography>
      <PageSizeSelect value={pageSize} onChange={onPageSizeOptionsChange}>
        {pageSizeOptions.map((candidatePageSize) => (
          <option
            value={candidatePageSize}
            key={candidatePageSize}
            defaultChecked={pageSize === candidatePageSize}
          >
            {candidatePageSize}
          </option>
        ))}
      </PageSizeSelect>
      <Typography type="body4" textAlign="end">
        {(page - 1) * pageSize + 1}-{page * pageSize} of {totalCount}
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-block: 8px;
  display: flex;
  justify-content: end;
  gap: 16px;
`;

const PageSizeSelect = styled.select`
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background-color: ${theme.colors.ui.hover};
  }
`;
