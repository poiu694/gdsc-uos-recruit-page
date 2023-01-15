import React from 'react';
import styled from '@emotion/styled';
import { Input, theme, Title, Typography } from 'gdsc-uos-design-system';
import { UserType } from '../@types';
import { ContentWrapper, Flex, SideMenu } from '../components';

function NewAdminUserPage() {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [userType, setUserType] = React.useState<UserType>('normal');

  return (
    <Wrapper>
      <SideMenu />
      <ContentWrapper>
        <Title
          title="New Admin User"
          descriptions="Admin 유저를 추가하는 페이지입니다."
        />
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
        <label>유저 타입</label>
        <UserTypeSelect
          value={userType}
          onChange={(e) => setUserType(e.target.value as UserType)}
        >
          {['super', 'normal'].map((type) => (
            <option key={type} value={type}>
              <Typography type="body3">{type}</Typography>
            </option>
          ))}
        </UserTypeSelect>
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
  margin-top: 8px;
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
