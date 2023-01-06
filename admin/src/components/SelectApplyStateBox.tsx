import styled from '@emotion/styled';
import { Chip, theme } from '@gdsc-uos-recruit-page/design-system';
import { ApplyState } from '../@types';
import { convertChipColorByState } from '../utils';
import { Flex } from './styled';

interface Props {
  value: ApplyState | null;
  onClickState: (status: ApplyState) => void;
}

function SelectApplyStateBox({ value, onClickState }: Props) {
  return (
    <Wrapper gap={10}>
      {[
        '서류 제출',
        '서류 불합격',
        '서류 합격',
        '최종 불합격',
        '최종 합격',
      ].map((status) => (
        <ClickableChip
          key={status}
          label={status}
          variants={value === status ? 'filled' : 'outlined'}
          type={convertChipColorByState(status as ApplyState)}
          onClick={() => onClickState(status as ApplyState)}
        />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  margin-top: 12px;
`;

const ClickableChip = styled(Chip)`
  cursor: pointer;
  transition: all 0.15s ease-in;

  &:hover {
    background-color: ${theme.palette.gray300};
    border-color: ${theme.palette.gray350};
  }
`;

export default SelectApplyStateBox;
