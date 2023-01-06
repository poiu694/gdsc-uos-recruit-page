import styled from '@emotion/styled';
import { theme, Typography } from '@gdsc-uos-recruit-page/design-system';
import { Flex } from './styled';

interface Props {
  title: string;
  answer: string;
}

function QuestionAndAnswer({ title, answer }: Props) {
  return (
    <Wrapper flexDirection="column" as={'section'}>
      <Typography
        type="h5"
        style={{
          borderBottom: `1px solid ${theme.colors.ui.border}`,
          marginBottom: 10,
        }}
      >
        {title}
      </Typography>
      <Typography type="body4">{answer}</Typography>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  padding: 16px;
  border: 1px solid ${theme.colors.ui.border};
  border-radius: 16px;
  margin-top: 32px;
`;

export default QuestionAndAnswer;
