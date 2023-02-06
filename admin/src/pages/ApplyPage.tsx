import React from 'react';
import styled from '@emotion/styled';
import {
  Input,
  Title,
  Typography,
  ClickableIcon,
  TablePagination,
  TeamKeyType,
} from 'gdsc-uos-design-system';

import { ApplyState, UserApplication } from '../@types';
import { usePagination } from '../hooks';
import {
  ApplicationTable,
  ContentWrapper,
  SelectOption,
  Flex,
  PageNavigation,
  SideMenu,
} from '../components';
import { DUMMY_APPLYS } from '../dummy/apply';
import ToggleSwitchBox from '../components/ToggleSwitchBox';

function ApplyPage() {
  const currentYear = new Date().getFullYear();
  const [search, setSearch] = React.useState<string>('');
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const [teamFilterValue, setTeamFilterValue] = React.useState<TeamKeyType | '전체'>('전체');
  const [applyStateFilterValue, setApplyStateFilterValue] = React.useState<ApplyState | '전체'>(
    '전체'
  );
  const [isFinishEvaluationFilterValue, setIsFinishEvaluationFilterValue] =
    React.useState<boolean>(false);
  const [applicationList, setApplicationList] = React.useState<UserApplication[]>([]);
  const { pageOptions, handleChangePage, handleChangePageSize } = usePagination({ totalCount });

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
        <Typography type="body5">데이터를 클릭하면 해당 지원자의 서류를 볼 수 있습니다.</Typography>
        <TableWrapper>
          <Flex gap={4} style={{ width: 300 }}>
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
            <ClickableIcon iconProps={{ type: 'search' }} onClick={() => console.log('hi')} />
          </Flex>

          <Flex alignItems="center" gap={8} style={{ marginTop: 8, marginBottom: 12 }}>
            <SelectOption
              label="Team"
              value={teamFilterValue}
              optionList={['전체', 'frontend', 'backend', 'mobile', 'data/ml', 'design']}
              onChange={(e) => setTeamFilterValue(e.target.value as TeamKeyType)}
            />
            <SelectOption
              label="State"
              value={applyStateFilterValue}
              optionList={[
                '전체',
                '서류 제출',
                '서류 불합격',
                '서류 합격',
                '최종 불합격',
                '최종 합격',
              ]}
              onChange={(e) => setApplyStateFilterValue(e.target.value as ApplyState | '전체')}
            />
            <ToggleSwitchBox
              label={'평가 X'}
              value={isFinishEvaluationFilterValue}
              onClick={() => setIsFinishEvaluationFilterValue((prev) => !prev)}
            />
            <TablePagination
              totalCount={totalCount}
              pageSizeOptions={[5, 10, 15]}
              page={pageOptions.currentPage}
              pageSize={pageOptions.pageSize}
              onPageSizeOptionsChange={(e) => handleChangePageSize(Number(e.target.value))}
            />
          </Flex>
          <ApplicationTable pageSize={pageOptions.pageSize} applications={applicationList} />
        </TableWrapper>
        <Navigation pageOptions={pageOptions} handleChangePage={handleChangePage} />
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
