import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Icon, theme, Typography } from 'gdsc-uos-design-system';
import CustomLink from './CustomLink';

function Bottom() {
  return (
    <Wrapper>
      <Typography type="body5" color={theme.palette.gray400}>
        © CopyRight GDSC UOS. All Right Reserved.
      </Typography>
      <IconWrapper>
        <CustomLink
          href="https://github.com/GDSC-University-of-Seoul"
          aria-label="move to gdsc-uos github"
        >
          <Icon hoverAction type="github" color={theme.palette.blue400} />
        </CustomLink>
        <CustomLink
          href="https://gdsc-university-of-seoul.github.io"
          aria-label="move to gdsc-uos blog"
        >
          <Icon hoverAction type="blog" color={theme.palette.coreYellow} />
        </CustomLink>
        <CustomLink
          href="mailto:olmnuiui70@gmail.com"
          aria-label="contact to site developer(gmail)"
        >
          <Icon hoverAction type="gmail" color={theme.palette.red200} />
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
