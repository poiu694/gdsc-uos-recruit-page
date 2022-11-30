import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '@gdsc-uos-recruit-page/design-system/theme';
import Icon from '@gdsc-uos-recruit-page/design-system/components/Icon';
import Typography from '@gdsc-uos-recruit-page/design-system/components/Typography';
import CustomLink from './CustomLink';

function Bottom() {
  return (
    <Wrapper>
      <Typography type='body5' color={theme.palette.gray300}>
        © CopyRight GDSC UOS. All Right Reserved.
      </Typography>
      <IconWrapper>
        <CustomLink
          href='https://github.com/GDSC-University-of-Seoul'
          aria-label='move to gdsc-uos github'
        >
          <Icon type='github' color={theme.palette.blue400} />
        </CustomLink>
        <CustomLink
          href='https://gdsc-university-of-seoul.github.io'
          aria-label='move to gdsc-uos blog'
        >
          <Icon type='blog' color={theme.palette.coreYellow} />
        </CustomLink>
        <CustomLink
          href='mailto:olmnuiui70@gmail.com'
          aria-label='contact to site developer(gmail)'
        >
          <Icon type='gmail' color={theme.palette.red200} />
        </CustomLink>
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto 32px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.padding.md}px;
  `}
`;

export default Bottom;
