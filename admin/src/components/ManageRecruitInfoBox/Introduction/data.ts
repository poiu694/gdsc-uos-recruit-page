import { FieldError, FieldErrors, Path } from 'react-hook-form';
import { IntroductionList } from '../../../@types';

export default class Data {
  index: number;
  itemIndex: number;
  dirtyFields: Partial<
    Readonly<{
      [x: string]: any;
    }>
  >;
  errors: FieldErrors<IntroductionList>;

  constructor(
    _index: number,
    _itemIndex: number,
    _errors: FieldErrors,
    _dirtyFields: Partial<
      Readonly<{
        [x: string]: any;
      }>
    >
  ) {
    this.dirtyFields = _dirtyFields;
    this.index = _index;
    this.itemIndex = _itemIndex;
    this.errors = _errors;
  }

  get name(): Path<IntroductionList> {
    return `introductions.${this.index}.list.${this.itemIndex}`;
  }

  get isDirty(): boolean {
    return !!this.dirtyFields?.introductions?.[this.index]?.list?.[this.itemIndex];
  }

  get isError(): boolean {
    return !!this.errors?.introductions?.[this.index]?.list?.[this.itemIndex];
  }

  get error(): FieldError | undefined {
    return this.errors?.introductions?.[this.index]?.list?.[this.itemIndex];
  }

  get isValid(): boolean | undefined {
    return !this.isDirty ? undefined : this.error?.message === 'undefined' ? true : false;
  }
}
