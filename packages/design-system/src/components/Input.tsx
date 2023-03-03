import React from 'react';
import styled from '@emotion/styled';

import { Icon } from './Icon';
import { theme } from '../theme';
import { Typography } from './Typography';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  isDirty?: boolean;
  isValid?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onReset?: () => void;
}

export const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      name,
      label,
      style,
      value,
      required,
      errorMessage,
      isDirty,
      isError,
      isValid,
      onReset,
      ...restProps
    },
    ref,
  ) => {
    const status = !isDirty ? 'editing' : isValid ? 'success' : 'fail';
    return (
      <Wrapper style={style}>
        {label && <Label htmlFor={id}>{label}</Label>}
        <InputWrapper id={id} ref={ref} name={name} value={value} status={status} {...restProps} />
        {!isDirty ? null : isValid ? (
          <ActiveIcon status={status} type="check" color={theme.colors.primary.green} />
        ) : (
          onReset && (
            <ActiveIcon
              status={status}
              type="close"
              onClick={() => {
                onReset();
              }}
            />
          )
        )}
        {isError && (
          <ErrorMessage type="body5" color={theme.colors.primary.red} textAlign="end">
            {errorMessage}
          </ErrorMessage>
        )}
      </Wrapper>
    );
  },
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const inputBorderColorByStatus = {
  editing: theme.palette.gray300,
  success: theme.colors.primary.green,
  fail: theme.colors.primary.red,
};

type StyleProps = {
  status: 'editing' | 'success' | 'fail';
};
const InputWrapper = styled.input<StyleProps>`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: ${(props) => `1px solid ${inputBorderColorByStatus[props.status]}`};
  border-radius: 4px;
  outline: none;
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

const ActiveIcon = styled(Icon)<StyleProps>`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  cursor: ${(props) => (props.status === 'fail' ? 'pointer' : 'default')};
`;

const ErrorMessage = styled(Typography)`
  position: absolute;
  top: 108%;
  left: 0;
`;
