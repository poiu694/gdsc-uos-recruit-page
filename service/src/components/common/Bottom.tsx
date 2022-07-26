import styled from '@emotion/styled';
import { theme } from '@gdsc-uos-recruit-page/design-system/theme';
import Icon from '@gdsc-uos-recruit-page/design-system/components/Icon';
import Typography from '@gdsc-uos-recruit-page/design-system/components/Typography';

function Bottom() {
  return (
    <Wrapper>
      <Typography type='body5' color={theme.palette.gray300}>
        © CopyRight GDSC UOS. All Right Reserved.
      </Typography>
      <IconWrapper>
        <Icon type='github' color={theme.palette.blue400} />
        <Icon type='blog' color={theme.palette.coreYellow} />
        <Icon type='gmail' color={theme.palette.red200} />
      </IconWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  margin: 100px auto 16px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: flex;
  gap: ${theme.padding.md}px;
`;

export default Bottom;
