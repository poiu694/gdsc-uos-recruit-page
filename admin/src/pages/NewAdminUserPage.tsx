import React from 'react';
import styled from '@emotion/styled';
import {
  BASIC_TEAM,
  Button,
  ButtonHierarchy,
  Input,
  TeamKeyType,
  theme,
  Title,
  Typography,
} from 'gdsc-uos-design-system';

import { UserType, UserRole } from '../@types';
import { ContentWrapper, Flex, SelectOption, SideMenu } from '../components';

function NewAdminUserPage() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [userType, setUserType] = React.useState<UserType>('normal');
  const [userTeam, setUserTeam] = React.useState<TeamKeyType>('frontend');
  const userRoleList = Object.values(UserRole).filter((role) => role !== 'normal');

  const handleClickNewAdminButton = () => {
    console.log({ email, password, userType, userTeam });
  };

  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title title="New Admin User" descriptions="Admin 유저를 추가하는 페이지입니다." />
        <Typography type="h4" style={{ marginTop: 32 }}>
          New Admin User
        </Typography>
        <InputContainer flexDirection="column" gap={16}>
          <Input
            name="email"
            label="이메일"
            value={email}
            placeholder="email"
            errorMessage="입력이 필요합니다."
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            name="password"
            label="패스워드"
            value={password}
            placeholder="password"
            errorMessage="입력이 필요합니다."
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <Flex gap={16} alignItems="center" style={{ marginTop: 16 }}>
          <SelectOption
            value={userType}
            label="유저 타입"
            optionList={userRoleList}
            onChange={(e) => setUserType(e.target.value as UserType)}
          />
          <SelectOption
            value={userTeam}
            label="유저 팀"
            optionList={Object.values(BASIC_TEAM)}
            onChange={(e) => setUserTeam(e.target.value as TeamKeyType)}
          />
          <Button
            onClick={handleClickNewAdminButton}
            hierarchy={ButtonHierarchy.Danger}
            style={{ padding: '8px 12px', marginTop: 8 }}
          >
            <Typography type="body4" color={theme.colors.primary.white}>
              생성
            </Typography>
          </Button>
        </Flex>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
`;

const InputContainer = styled(Flex)`
  width: 30%;
  margin-top: 32px;
`;

const UserTypeSelect = styled.select`
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in;
  margin-left: 16px;
  padding: 8px;

  &:hover {
    background-color: ${theme.colors.ui.hover};
  }
`;

export default NewAdminUserPage;
