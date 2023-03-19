import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Typography } from '@gdsc-uos/ui';

interface Props {
  type: 'icon' | 'icon-text';
}

function Logo({ type }: Props) {
  const theme = useTheme();

  return (
    <LogoContainer>
      <Image src="/logo.png" />
      {type === 'icon-text' && (
        <Typography type="h2" textAlign="center" color={theme.colors.primary.yellow}>
          GDSC UOS
        </Typography>
      )}
    </LogoContainer>
  );
}

const LogoContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  min-height: 100px;
`;

export default Logo;
