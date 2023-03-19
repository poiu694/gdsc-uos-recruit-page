import styled from '@emotion/styled';
import { css, useTheme } from '@emotion/react';
import { Button, ButtonHierarchy, Typography } from '@gdsc-uos/ui';

import { FAQ } from '@/@types';
import { Flex } from './styled';

interface Props {
  title: string;
  description: string;
  type?: 'show' | 'edit';
  onDeleteClick?: (faq: FAQ) => void;
}

function QuestionAndDescription({ title, description, type = 'show', onDeleteClick }: Props) {
  const theme = useTheme();

  return (
    <Wrapper flexDirection="column" as={'section'}>
      <Flex
        justifyContent="space-between"
        style={{
          borderBottom: `1px solid ${theme.colors.ui.border}`,
          marginBottom: 10,
        }}
      >
        <Typography type="h5">{title}</Typography>
        {type === 'edit' && (
          <Button
            hierarchy={ButtonHierarchy.Parent}
            onClick={() => {
              if (typeof onDeleteClick !== 'undefined') {
                onDeleteClick({ title, description });
              }
            }}
          >
            ❌
          </Button>
        )}
      </Flex>
      <Typography type="body4">{description}</Typography>
    </Wrapper>
  );
}

const Wrapper = styled(Flex)`
  ${({ theme }) => css`
    padding: 16px;
    border: 1px solid ${theme.colors.ui.border};
    border-radius: 16px;
    margin-top: 32px;
  `}
`;

export default QuestionAndDescription;
