import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';

interface Props {
  title: string;
  items: string[];
}

function List({ title, items }: Props) {
  return (
    <Wrapper>
      <Typography type="h5" color={theme.colors.text.bold}>
        {title}
      </Typography>
      <Lists>
        {items.map((item) => (
          <ListItem key={item} type="body3">
            • {item}
          </ListItem>
        ))}
      </Lists>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 32px auto 0 auto;

  display: flex;
  flex-direction: column;
`;

const Lists = styled.ul`
  margin-top: 16px;
`;

const ListItem = styled(Typography)``;

export default List;
