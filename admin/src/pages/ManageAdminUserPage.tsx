import React from 'react';
import styled from '@emotion/styled';
import {
  Td,
  Tr,
  Chip,
  Table,
  TBody,
  THead,
  theme,
  Title,
  Button,
  Typography,
  ButtonHierarchy,
  TablePagination,
} from 'gdsc-uos-design-system';

import { usePagination } from '@/hooks';
import { DUMMY_ADMIN_USERS } from '@/dummy/users';
import { ContentWrapper, PageNavigation, SideMenu } from '@/components';
import { convertChipColorByTeam, convertChipColorByUserType } from '@/utils';

function ManageAdminUserPage() {
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const { pageOptions, handleChangePage, handleChangePageSize } = usePagination({
    totalCount,
  });

  const handleChangePageSizeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
        <Title title="Manage Admin User" descriptions="Admin 유저를 관리하는 페이지입니다." />
        <Typography type="h4" style={{ marginTop: 32 }}>
          Admin Users
        </Typography>
        <TableWrapper>
          <TablePagination
            totalCount={totalCount}
            pageSizeOptions={[5, 10, 15]}
            page={pageOptions.currentPage}
            pageSize={pageOptions.pageSize}
            onPageSizeOptionsChange={handleChangePageSizeOption}
          />
          <Table variant="striped">
            <THead>
              <Tr>
                <Td>
                  <Typography type="body4">이름</Typography>
                </Td>
                <Td>
                  <Typography type="body4">유저 팀</Typography>
                </Td>
                <Td>
                  <Typography type="body4">유저 타입</Typography>
                </Td>
                <Td>
                  <Typography type="body4">탈퇴</Typography>
                </Td>
              </Tr>
            </THead>
            <TBody>
              {DUMMY_ADMIN_USERS.slice(0, pageOptions.pageSize).map((user) => (
                <Tr onClick={() => console.log(user.id)} key={user.id}>
                  <Td>
                    <Typography type="body4">{user.name}</Typography>
                  </Td>
                  <Td>
                    <Typography type="body4">
                      <Chip
                        variants="outlined"
                        type={convertChipColorByTeam(user.team)}
                        label={user.team}
                      />
                    </Typography>
                  </Td>
                  <Td>
                    <Chip
                      variants="filled"
                      type={convertChipColorByUserType(user.type)}
                      label={user.type}
                    />
                  </Td>
                  <Td>
                    <Button disabled={user.type === 'core'} hierarchy={ButtonHierarchy.Danger}>
                      <Typography
                        type="body4"
                        textAlign="center"
                        style={{ padding: 6 }}
                        color={theme.colors.primary.white}
                      >
                        탈퇴
                      </Typography>
                    </Button>
                  </Td>
                </Tr>
              ))}
            </TBody>
          </Table>
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

export default ManageAdminUserPage;
