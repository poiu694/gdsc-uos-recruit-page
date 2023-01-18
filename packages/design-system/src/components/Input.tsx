import React from 'react';
import styled from '@emotion/styled';

import { theme } from '../theme';
import Typography from './Typography';

interface Props extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  errorMessage?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      label,
      value,
      id,
      required,
      errorMessage,
      name,
      onChange,
      style,
      ...restProps
    },
    ref
  ) => {
    const [isFirstFocused, setIsFirstFocused] = React.useState<boolean>(false);
    const emptyError = required && isFirstFocused && value === '';

    return (
      <Wrapper style={style}>
        <Label htmlFor={id}>
          {label && (
            <LabelTypography type="body4" color={theme.palette.gray400}>
              {label}
            </LabelTypography>
          )}
        </Label>
        <InputWrapper
          id={id}
          ref={ref}
          name={name}
          value={value}
          onClick={() => setIsFirstFocused(true)}
          onChange={onChange}
          {...restProps}
        />
        {emptyError && (
          <ErrorMessage
            type="body5"
            color={theme.colors.primary.red}
            textAlign="end"
          >
            {errorMessage}
          </ErrorMessage>
        )}
      </Wrapper>
    );
  }
);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const InputWrapper = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid ${theme.colors.ui.divider};
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

const LabelTypography = styled(Typography)``;

const ErrorMessage = styled(Typography)`
  position: absolute;
  top: 0;
  right: 0;
`;

export default Input;
