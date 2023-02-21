import React from 'react';
import styled from '@emotion/styled';

import { theme } from '../theme';
import { Typography } from './Typography';

interface Props extends React.ComponentPropsWithoutRef<'textarea'> {
  label?: string;
  length?: number;
  isDirty?: boolean;
  isValid?: boolean;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    { label, value, id, required, name, style, length, maxLength, isDirty, isValid, ...restProps },
    ref
  ) => {
    const status = !isDirty ? 'editing' : isValid ? 'success' : 'fail';
    return (
      <Wrapper style={style}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Label htmlFor={id}>
            {label && (
              <Typography type="body4" color={theme.palette.gray400}>
                {label}
              </Typography>
            )}
          </Label>
          {maxLength && (
            <Typography type="body5">{`${Number(length ?? 0)} / ${maxLength}`}</Typography>
          )}
        </div>
        <TextAreaWrapper
          id={id}
          ref={ref}
          name={name}
          value={value}
          status={status}
          maxLength={maxLength}
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

const textAreaBorderColorByStatus = {
  editing: theme.palette.gray300,
  success: theme.colors.primary.green,
  fail: theme.colors.primary.red,
};

type StyleProps = {
  status: 'editing' | 'success' | 'fail';
};
const TextAreaWrapper = styled.textarea<StyleProps>`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: ${(props) => `1px solid ${textAreaBorderColorByStatus[props.status]}`};
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
