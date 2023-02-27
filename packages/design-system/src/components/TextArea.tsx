import React from 'react';
import styled from '@emotion/styled';

import { Theme, theme } from '../theme';
import { Typography } from './Typography';
import { useTheme } from '@emotion/react';

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
    const theme = useTheme() as Theme;
    const status = !isDirty ? 'editing' : isValid ? 'success' : 'fail';

    return (
      <Wrapper style={style}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Label htmlFor={id} required={required}>
            {label && (
              <Typography
                type="body4"
                color={theme.colors.text.general}
                style={{ whiteSpace: 'pre-line' }}
                display={'inline'}
              >
                {label}
              </Typography>
            )}
          </Label>
          {maxLength && (
            <Typography
              type="body5"
              style={{ flex: 1, textAlign: 'end', whiteSpace: 'nowrap', alignSelf: 'end' }}
              color={theme.colors.text.general}
            >
              {`${Number(value?.toString().length ?? 0)} / `}
              <Typography type="body5" display={'inline'} color={theme.palette.gray350}>
                {maxLength}
              </Typography>
            </Typography>
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
  margin-top: 8px;

  &:hover {
    border: 1px solid ${theme.colors.primary.green};
  }

  &:focus {
    border: 1px solid ${theme.colors.primary.blue};
  }
`;

const Label = styled.label<Pick<Props, 'required'>>`
  display: inline-block;

  &::after {
    display: ${(props) => (props.required ? 'inline-block' : 'none')};
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 2px;
    margin-left: 6px;
    content: '';
    width: 6px;
    min-width: 6px;
    height: 6px;
    background-color: rgb(234, 67, 53);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
`;
