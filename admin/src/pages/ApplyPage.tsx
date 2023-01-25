import React from 'react';
import styled from '@emotion/styled';
import { Title, Typography, TablePagination } from 'gdsc-uos-design-system';

import { usePagination } from '../hooks';
import {
  ApplicationTable,
  ContentWrapper,
  PageNavigation,
  SideMenu,
} from '../components';
import { DUMMY_APPLYS } from '../dummy/apply';

function ApplyPage() {
  const currentYear = new Date().getFullYear();
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const { pageOptions, handleChangePage, handleChangePageSize } = usePagination(
    {
      totalCount,
    }
  );

  const handleChangePageSizeOption = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    handleChangePageSize(Number(e.target.value));
  };

  React.useEffect(() => {
    (async () => {
      // TODO: Backend연동
      setTotalCount(150);
    })();
  }, []);

  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title
          title="Apply"
          descriptions={`${currentYear} GSDC UOS Recruit에 지원자 관리 페이지입니다.`}
        />
        <Typography type="h4" style={{ marginTop: 32 }}>
          지원 서류
        </Typography>
        <Typography type="body5">
          데이터를 클릭하면 해당 지원자의 서류를 볼 수 있습니다.
        </Typography>
        <TableWrapper>
          <TablePagination
            totalCount={totalCount}
            pageSizeOptions={[5, 10, 15]}
            page={pageOptions.currentPage}
            pageSize={pageOptions.pageSize}
            onPageSizeOptionsChange={handleChangePageSizeOption}
          />
          <ApplicationTable
            pageSize={pageOptions.pageSize}
            applications={DUMMY_APPLYS}
          />
        </TableWrapper>
        <Navigation
          pageOptions={pageOptions}
          handleChangePage={handleChangePage}
        />
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const TableWrapper = styled.div`
  width: 90%;
  margin: 40px auto;
`;

const Navigation = styled(PageNavigation)`
  width: 60%;
  margin: 0 auto;
`;

export default ApplyPage;
