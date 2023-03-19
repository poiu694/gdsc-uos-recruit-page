import styled from '@emotion/styled';
import { Typography } from '@gdsc-uos/ui';

interface Props {
  value: string;
  label?: string;
  optionList: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectOption({ value, label, optionList, onChange }: Props) {
  return (
    <Wrapper>
      {label && <Typography type="body5">{label}</Typography>}
      <SelectList value={value} onChange={onChange}>
        {optionList.map((filter) => (
          <Item key={filter} value={filter}>
            {filter}
          </Item>
        ))}
      </SelectList>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SelectList = styled.select`
  outline: none;
  cursor: pointer;
  transition: all 0.1s ease-in;
  padding: 4px 2px;

  // select style 통일
  background: url('down.png') no-repeat 95% 50%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  /* and then whatever styles you want*/
  height: 30px;
  width: 100px;
  padding: 5px;
`;

const Item = styled.option``;

export default SelectOption;
