import React from 'react';
import styled from '@emotion/styled';
import {
  Input,
  Title,
  Typography,
  ClickableIcon,
  TablePagination,
} from 'gdsc-uos-design-system';

import { usePagination } from '../hooks';
import {
  ApplicationTable,
  ContentWrapper,
  Flex,
  PageNavigation,
  SideMenu,
} from '../components';
import { DUMMY_APPLYS } from '../dummy/apply';

function ApplyPage() {
  const currentYear = new Date().getFullYear();
  const [search, setSearch] = React.useState<string>('');
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const [applicationList, setApplicationList] = React.useState<
    typeof DUMMY_APPLYS
  >([]);
  const { pageOptions, handleChangePage, handleChangePageSize } = usePagination(
    { totalCount }
  );

  React.useEffect(() => {
    (async () => {
      // TODO: Backend연동
      setTotalCount(150);
      setApplicationList(DUMMY_APPLYS);
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
          <Flex>
            <Flex style={{ marginBottom: 4 }} gap={4}>
              <SearchInput
                name="검색어"
                placeholder="검색어"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    console.log(search);
                  }
                }}
              />
              <ClickableIcon
                iconProps={{ type: 'search' }}
                onClick={() => console.log('hi')}
              />
            </Flex>
            <TablePagination
              totalCount={totalCount}
              pageSizeOptions={[5, 10, 15]}
              page={pageOptions.currentPage}
              pageSize={pageOptions.pageSize}
              onPageSizeOptionsChange={(e) =>
                handleChangePageSize(Number(e.target.value))
              }
            />
          </Flex>
          <ApplicationTable
            pageSize={pageOptions.pageSize}
            applications={applicationList}
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

const SearchInput = styled(Input)`
  width: 300px;
  height: 100%;
`;

export default ApplyPage;
