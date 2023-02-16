import React from 'react';
import { FieldValues, Path, useForm, UseFormProps } from 'react-hook-form';

const useReactHookFormEvent = <T extends FieldValues>(
  options?: UseFormProps<T, object>
) => {
  const fieldForms = useForm<T, object>(options);
  const { trigger, resetField, setFocus } = fieldForms;

  const handleValidForm = React.useCallback(
    (formKey: Path<T>) => {
      trigger(formKey);
    },
    [trigger]
  );

  const handleClickResetIcon = React.useCallback(
    (formKey: Path<T>) => {
      resetField(formKey);
      setFocus(formKey);
    },
    [resetField, setFocus]
  );

  return {
    fieldForms,
    handleValidForm,
    handleClickResetIcon,
  };
};

export default useReactHookFormEvent;
