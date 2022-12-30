import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import Icon, {
  IconKeyType,
} from '@gdsc-uos-recruit-page/design-system/components/Icon';

interface Props {
  icon: IconKeyType;
  text: string;
}

function IconText({ icon, text }: Props) {
  return (
    <Wrapper>
      <Icon type={icon} />
      <Typography type="body4" textAlign="center" color={theme.palette.gray50}>
        {text}
      </Typography>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export default IconText;
