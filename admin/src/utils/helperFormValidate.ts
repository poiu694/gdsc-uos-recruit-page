import { FieldError, FieldErrors } from 'react-hook-form';
import { get } from './helperArray';

const validateRule = {
  essential: {
    required: '해당 칸을 채워주세요.',
  },
  default: {},
} as const;

// input validation function
export const validateChecker = (type: string) => {
  if (type in validateRule) {
    return validateRule[type as keyof typeof validateRule];
  }
  return validateRule.default;
};

export const isCurrentTypeValid = (
  isDirty: boolean | undefined,
  type: keyof FieldErrors,
  errors: FieldErrors
) => {
  if (typeof isDirty === 'undefined') {
    return undefined;
  }
  return !isDirty
    ? undefined
    : typeof (get(errors, type) as FieldError)?.message === 'undefined'
    ? true
    : false;
};
