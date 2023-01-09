import React from 'react';
import styled from '@emotion/styled';
import {
  Chip,
  Table,
  TablePagination,
  TBody,
  Td,
  THead,
  Title,
  Tr,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';
import { useNavigate } from 'react-router-dom';

import { usePagination } from '../hooks';
import { ContentWrapper, PageNavigation, SideMenu } from '../components';
import { DUMMY_APPLYS } from '../dummy/apply';
import { convertChipColorByState, convertChipColorByTeam } from '../utils';

function ApplyPage() {
  const navigate = useNavigate();
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
          <Table variant="simple">
            <THead>
              <Tr>
                <Td>
                  <Typography type="body4">이름</Typography>
                </Td>
                <Td>
                  <Typography type="body4">지원 플랫폼</Typography>
                </Td>
                <Td>
                  <Typography type="body4">상태</Typography>
                </Td>
                <Td>
                  <Typography type="body4">지원서 링크</Typography>
                </Td>
              </Tr>
            </THead>
            <TBody>
              {DUMMY_APPLYS.slice(0, pageOptions.pageSize).map((apply) => (
                <Tr
                  onClick={() => navigate(`/apply/${apply.id}`)}
                  key={apply.id}
                >
                  <Td>
                    <Typography type="body4">{apply.name}</Typography>
                  </Td>
                  <Td>
                    <Chip
                      variants="outlined"
                      type={convertChipColorByTeam(
                        apply.team.toLocaleLowerCase()
                      )}
                      label={apply.team}
                    />
                  </Td>
                  <Td>
                    <Chip
                      variants="filled"
                      type={convertChipColorByState(apply.state)}
                      label={apply.state}
                    />
                  </Td>
                  <Td></Td>
                </Tr>
              ))}
            </TBody>
          </Table>
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
