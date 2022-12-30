import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';

interface Props {
  type: 'icon' | 'icon-text';
}

function Logo({ type }: Props) {
  return (
    <LogoContainer>
      <Image src="/logo.png" />
      {type === 'icon-text' && (
        <Typography
          type="h2"
          textAlign="center"
          color={theme.colors.primary.yellow}
        >
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
`;

export default Logo;