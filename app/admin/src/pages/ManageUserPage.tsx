import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import {
  Td,
  Tr,
  Chip,
  Table,
  TBody,
  THead,
  Title,
  Button,
  Typography,
  ButtonHierarchy,
  TablePagination,
} from '@gdsc-uos/ui';

import { UserType } from '@/@types';
import { usePagination } from '@/hooks';
import { convertChipColorByTeam } from '@/utils';
import { DUMMY_ADMIN_USERS } from '@/dummy/users';
import { PageNavigation, SelectOption } from '@/components';

function ManageUserPage() {
  const theme = useTheme();
  const [totalCount, setTotalCount] = React.useState<number>(0);
  const [userRoles, setUserRoles] = React.useState<Record<string, UserType>>({});
  const { pageOptions, handleChangePage, handleChangePageSize } = usePagination({
    totalCount,
  });

  const handleChangePageSizeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleChangePageSize(Number(e.target.value));
  };

  const handeChangeUserType = (e: React.ChangeEvent<HTMLSelectElement>, userId: string) => {
    const nextUserType = e.target.value as UserType;
    setUserRoles((prev) => ({ ...prev, [userId]: nextUserType }));
  };

  const handleClickUpdateButton = (userId: string) => {
    console.log(userId, userRoles[userId]);
  };

  React.useEffect(() => {
    (async () => {
      // TODO: Backend연동
      setTotalCount(DUMMY_ADMIN_USERS.length);
      setUserRoles(DUMMY_ADMIN_USERS.reduce((acc, user) => ({ ...acc, [user.id]: user.type }), {}));
    })();
  }, []);

  return (
    <Wrapper>
      <Title title="Manage User" descriptions="유저를 관리하는 페이지입니다." />
      <Typography type="h4" style={{ marginTop: 32 }}>
        Users
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
                <Typography type="body4">변경</Typography>
              </Td>
              <Td>
                <Typography type="body4">탈퇴</Typography>
              </Td>
            </Tr>
          </THead>
          <TBody>
            {DUMMY_ADMIN_USERS.slice(0, pageOptions.pageSize).map((user) => (
              <Tr key={user.id}>
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
                  <SelectOption
                    value={userRoles[user.id]}
                    optionList={['lead', 'core', 'normal']}
                    onChange={(e) => handeChangeUserType(e, user.id)}
                  />
                </Td>
                <Td>
                  <Button hierarchy={ButtonHierarchy.Success}>
                    <Typography
                      type="body4"
                      textAlign="center"
                      style={{ padding: 6 }}
                      color={theme.colors.primary.white}
                      onClick={() => handleClickUpdateButton(user.id)}
                    >
                      변경
                    </Typography>
                  </Button>
                </Td>
                <Td>
                  <Button
                    disabled={userRoles[user.id] === 'lead'}
                    hierarchy={ButtonHierarchy.Danger}
                  >
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

export default ManageUserPage;
