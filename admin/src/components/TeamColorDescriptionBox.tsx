import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { PalleteValueType, Typography } from 'gdsc-uos-design-system';

import { Flex } from './styled';

function TeamColorDescriptionBox() {
  const theme = useTheme();

  return (
    <Wrapper flexDirection="column" gap={16}>
      <ColorBox color={theme.colors.team.frontend} alignItems="center" justifyContent="center">
        <Label type="body4" textAlign="center" color={theme.colors.primary.white}>
          frontend
        </Label>
      </ColorBox>
      <ColorBox color={theme.colors.team.backend} alignItems="center" justifyContent="center">
        <Label type="body4" textAlign="center" color={theme.colors.primary.white}>
          backend
        </Label>
      </ColorBox>
      <ColorBox color={theme.colors.team.data_ml} alignItems="center" justifyContent="center">
        <Label type="body4" textAlign="center" color={theme.colors.primary.white}>
          data/ml
        </Label>
      </ColorBox>
      <ColorBox color={theme.colors.team.mobile} alignItems="center" justifyContent="center">
        <Label type="body4" textAlign="center" color={theme.colors.primary.white}>
          mobile
        </Label>
      </ColorBox>
      <ColorBox color={theme.colors.team.design} alignItems="center" justifyContent="center">
        <Label type="body4" textAlign="center" color={theme.colors.primary.white}>
          design
        </Label>
      </ColorBox>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  padding-top: 32px;
`;

type StyleColorBox = Record<'color', PalleteValueType>;
const ColorBox = styled(Flex)<StyleColorBox>`
  width: 100px;
  height: 40px;
  content: '';
  border-radius: 8px;
  background-color: ${({ color }) => color};
`;

const Label = styled(Typography)`
  align-self: center;
`;

export default TeamColorDescriptionBox;
