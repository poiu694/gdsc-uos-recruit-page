import React from 'react';
import styled from '@emotion/styled';

import { theme } from '../theme';
import { Typography } from './Typography';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, value, id, required, name, onChange, style, ...restProps },
    ref
  ) => {
    return (
      <Wrapper style={style}>
        <Label htmlFor={id}>
          {label && (
            <LabelTypography type="body4" color={theme.palette.gray400}>
              {label}
            </LabelTypography>
          )}
        </Label>
        <TextAreaWrapper
          id={id}
          ref={ref}
          name={name}
          value={value}
          onChange={onChange}
          {...restProps}
        />
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TextAreaWrapper = styled.textarea`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.ui.divider};
  border-radius: 4px;
  outline: none;
  resize: none;
  color: ${theme.palette.gray400};

  &:hover {
    border: 1px solid ${theme.colors.primary.green};
  }

  &:focus {
    border: 1px solid ${theme.colors.primary.blue};
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const LabelTypography = styled(Typography)``;
