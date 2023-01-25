import styled from '@emotion/styled';
import { theme, Typography } from 'gdsc-uos-design-system';

interface Props {
  value: string;
  label?: string;
  filterList: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function FilterSelect({ value, label, filterList, onChange }: Props) {
  return (
    <Wrapper>
      {label && <Typography type="body5">{label}</Typography>}
      <SelectList value={value} onChange={onChange}>
        {filterList.map((filter) => (
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

  &:hover {
    background-color: ${theme.colors.ui.hover};
  }
`;

const Item = styled.option``;

export default FilterSelect;
