import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Icon, Typography } from '@gdsc-uos/ui';

import CustomLink from './CustomLink';

function Bottom() {
  const theme = useTheme();

  return (
    <Wrapper>
      <BottomWrapper>
        <Typography type="body5" color={theme.colors.text.general}>
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
          <CustomLink href="mailto:poiu694@naver.com" aria-label="contact to site developer(naver)">
            <Icon hoverAction type="gmail" color={theme.palette.red200} />
          </CustomLink>
        </IconWrapper>
      </BottomWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 32px;
  background-color: ${(props) => props.theme.colors.background};
`;

const BottomWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: ${(props) => props.theme.padding.md}px;
`;

export default Bottom;
