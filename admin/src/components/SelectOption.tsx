import styled from '@emotion/styled';
import { theme, Typography } from 'gdsc-uos-design-system';

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
  background: url(data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+)
    no-repeat 95% 50%;
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
