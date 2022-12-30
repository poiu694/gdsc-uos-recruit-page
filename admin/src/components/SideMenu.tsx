import styled from '@emotion/styled';
import {
  Button,
  theme,
  Typography,
} from '@gdsc-uos-recruit-page/design-system';
import { ButtonHierarchy } from '@gdsc-uos-recruit-page/design-system/components/Button';
import { useNavigate } from 'react-router-dom';
import IconText from './IconText';
import Logo from './Logo';

interface Props {
  user: '';
}

function SideMenu() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header>
        <Logo type="icon" />
      </Header>
      <MenuList>
        <Typography
          type="body4"
          color={theme.palette.gray200}
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

      <MenuList>
        <Typography
          type="body4"
          color={theme.palette.gray200}
          style={{
            margin: '32px 0 8px 48px',
          }}
        >
          ADMIN SETTING
        </Typography>
        <MenuItem onClick={() => navigate('/admin-user')}>
          <IconText text="Admin-User" icon="user" />
        </MenuItem>
        <MenuItem onClick={() => navigate('/recruit')}>
          <IconText text="Recruit" icon="calender" />
        </MenuItem>
      </MenuList>
      <LogoutButton hierarchy={ButtonHierarchy.Danger} width={'176px'}>
        <Typography
          type="body4"
          textAlign="center"
          color={theme.palette.gray50}
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
    ${theme.palette.gray400} 0%,
    ${theme.palette.gray500} 100%
  );
`;

const Header = styled.header`
  border: 1px solid ${theme.palette.gray200};
  margin-bottom: 16px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MenuItem = styled.li`
  padding: 8px;
  margin-inline: 32px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.15s all ease-in;

  &:hover {
    background-color: ${theme.palette.gray300};
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