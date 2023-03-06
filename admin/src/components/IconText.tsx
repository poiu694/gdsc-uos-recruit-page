import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { Typography, Icon, IconKeyType } from 'gdsc-uos-design-system';

import { Flex } from './styled';

interface Props {
  icon: IconKeyType;
  text: string;
}

function IconText({ icon, text }: Props) {
  const theme = useTheme();

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

export default React.memo(IconText);
