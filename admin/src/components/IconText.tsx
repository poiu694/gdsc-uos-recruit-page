import styled from '@emotion/styled';
import { theme, Typography } from 'gdsc-uos-design-system';
import Icon, { IconKeyType } from 'gdsc-uos-design-system/components/Icon';
import { Flex } from './styled';

interface Props {
  icon: IconKeyType;
  text: string;
}

function IconText({ icon, text }: Props) {
  return (
    <Wrapper gap={12} alignItems="center">
      <Icon type={icon} />
      <Typography type="body4" textAlign="center" color={theme.palette.gray200}>
        {text}
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)``;

export default IconText;
