import styled from '@emotion/styled';
import { theme, Button, Typography, ButtonHierarchy } from 'gdsc-uos-design-system';
import { useNavigate } from 'react-router-dom';

import Logo from './Logo';
import { Flex } from './styled';
import IconText from './IconText';

function SideMenu() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <Logo type="icon" />
      </Header>
      <MenuList flexDirection="column" gap={8} as={'ul'}>
        <Typography
          type="body4"
          color={theme.palette.gray250}
          style={{
            margin: '32px 0 8px 48px',
          }}
        >
          MANAGE APPLY
        </Typography>
        <MenuItem onClick={() => navigate('/main')}>
          <IconText text="Dashboard" icon="grid" />
        </MenuItem>
        <MenuItem onClick={() => navigate('/apply')}>
          <IconText text="Apply" icon="form" />
        </MenuItem>
      </MenuList>

      <MenuList flexDirection="column" gap={8} as={'ul'}>
        <Typography
          type="body4"
          color={theme.palette.gray250}
          style={{
            margin: '32px 0 8px 48px',
          }}
        >
          ADMIN SETTING
        </Typography>
        <MenuItem onClick={() => navigate('/admin-user')}>
          <IconText text="Admin List" icon="user" />
        </MenuItem>
        <MenuItem onClick={() => navigate('/signup-admin-user')}>
          <IconText text="Add Admin" icon="userPlus" />
        </MenuItem>
        <MenuItem onClick={() => navigate('/recruit')}>
          <IconText text="Recruit" icon="calender" />
        </MenuItem>
        <MenuItem onClick={() => navigate('/email')}>
          <IconText text="Email" icon="gmail" />
        </MenuItem>
      </MenuList>
      <LogoutButton hierarchy={ButtonHierarchy.Danger} width={'176px'}>
        <Typography
          type="body4"
          textAlign="center"
          color={theme.palette.gray50}
          onClick={() => navigate('/')}
        >
          Logout
        </Typography>
      </LogoutButton>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  margin: 16px 0 16px 16px;
  border-radius: 16px;
  width: 100%;
  max-width: 240px;
  overflow-y: auto;
  padding: 0;
  background-image: linear-gradient(
    195deg,
    ${theme.palette.gray500} 0%,
    ${theme.palette.black} 100%
  );
`;

const Header = styled.header`
  border: 1px solid ${theme.palette.gray350};
  margin-bottom: 16px;
`;

const MenuList = styled(Flex)``;
const MenuItem = styled.li`
  padding: 8px;
  margin-inline: 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.15s all ease-in;

  &:hover {
    background-color: ${theme.palette.gray500};
  }
`;

const LogoutButton = styled(Button)`
  position: absolute;
  left: 32px;
  bottom: 16px;
  padding: 8px;
  box-sizing: border-box;
`;

export default SideMenu;
