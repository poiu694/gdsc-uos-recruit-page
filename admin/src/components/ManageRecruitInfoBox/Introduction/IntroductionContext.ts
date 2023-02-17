import { createGenericContext, createGenericUseContext } from 'gdsc-uos-design-system';
import { FieldValues, Path } from 'react-hook-form';

import { IntroductionList } from '../../../@types';

interface IntroductionEvent<T extends FieldValues> {
  handleValidForm: (formKey: Path<T>) => void;
  handleClickResetIcon: (formKey: Path<T>) => void;
}

export const IntroductionContext = createGenericContext<IntroductionEvent<IntroductionList>>();

export const useIntroductionContext =
  createGenericUseContext<IntroductionEvent<IntroductionList>>(IntroductionContext);
