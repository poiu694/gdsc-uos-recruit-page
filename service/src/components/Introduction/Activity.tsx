import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';

interface ActivityProps {
  activies: string[];
}

function Activity({ activies }: ActivityProps) {
  return (
    <Wrapper>
      <Typography type='h5' color={theme.colors.text.bold}>
        활동
      </Typography>
      <List>
        {activies.map((activity) => (
          <ListItem key={activity} type='body3'>
            • {activity}
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 32px auto 0 auto;

  display: flex;
  flex-direction: column;
`;

const List = styled.ul`
  margin-top: 16px;
`;

const ListItem = styled(Typography)``;

export default Activity;
