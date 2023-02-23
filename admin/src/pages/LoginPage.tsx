import React from 'react';
import styled from '@emotion/styled';
import { Input, theme, Button, Typography, ButtonHierarchy } from 'gdsc-uos-design-system';
import { useNavigate } from 'react-router-dom';

import { Flex, Logo } from '@/components';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <Wrapper>
      <BackgroundImage>
        <Center justifyContent="center" alignItems="center">
          <Gradient />
          <BoxContainer>
            <Logo type="icon-text" />
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
            <Button
              hierarchy={ButtonHierarchy.Success}
              style={{ marginTop: 32, padding: 8 }}
              fullWidth
              onClick={() => navigate('/main')}
            >
              <Typography type="body3" color={theme.palette.gray50} textAlign="center">
                로그인
              </Typography>
            </Button>
          </BoxContainer>
        </Center>
      </BackgroundImage>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: 50%;
`;

const Center = styled(Flex)`
  width: 100%;
  height: 100%;
`;

const BoxContainer = styled.div`
  position: relative;
  width: 30%;
  padding: 16px;
  border: 1px solid ${theme.colors.ui.divider};
  border-radius: 16px;
  background-color: ${theme.colors.background};
  box-sizing: border-box;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4);
`;

const Gradient = styled.span`
  position: absolute;
  background-size: cover;
  background-position: center center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-image: linear-gradient(
    195deg,
    ${theme.palette.gray400} 0%,
    ${theme.palette.gray500} 100%
  );
`;

const InputContainer = styled(Flex)`
  margin-top: 32px;
`;

export default LoginPage;
