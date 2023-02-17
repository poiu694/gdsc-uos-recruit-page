import React from 'react';
import styled from '@emotion/styled';
import {
  Icon,
  Input,
  theme,
  Button,
  Typography,
  ClickableIcon,
  ButtonHierarchy,
} from 'gdsc-uos-design-system';
import { Path, useWatch, FieldError, useFieldArray, useFormContext } from 'react-hook-form';

import { IntroductionList } from '../../../@types';
import { useIntroductionContext } from './IntroductionContext';
import { get, isCurrentTypeValid, validateChecker } from '../../../utils';

interface Props {
  index: number;
}

function TitleWithIntroductions({ index }: Props) {
  const {
    formState: { errors, dirtyFields },
    control,
    register,
  } = useFormContext();
  const { handleValidForm, handleClickResetIcon } = useIntroductionContext();
  const title = useWatch({
    control,
    name: `introductions.${index}.title`,
  });
  const { fields, remove, append } = useFieldArray({
    control,
    name: `introductions.${index}.list`,
  });

  const handleClickAddFiled = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      e.stopPropagation();
      if (fields.length < 5) {
        append('');
      } else {
        alert('질문에 대한 답변은 5개를 넘어갈 수 없습니다.');
      }
    },
    []
  );

  const handleRemoveField = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(index);
      remove(index);
    },
    []
  );

  return (
    <div>
      <Typography type="h5" style={{ marginTop: 12 }}>
        {title}
      </Typography>
      <AnswerList>
        {fields?.map((introduction, itemIndex) => {
          const name = `introductions.${index}.list.${itemIndex}` as Path<IntroductionList>;
          const isDirty = !!get(dirtyFields, name);
          const isError = typeof get(errors, name) !== 'undefined';
          return (
            <BulletListItem key={introduction.id}>
              <Typography type="body5">•</Typography>
              <Input
                {...register(name, validateChecker('essential'))}
                key={introduction?.id}
                isError={isError}
                isDirty={isDirty}
                placeholder="소개글을 입력해주세요."
                isValid={isCurrentTypeValid(isDirty, name, errors)}
                errorMessage={(get(errors, name) as FieldError)?.message}
                onBlur={() => handleValidForm(name)}
                onReset={() => handleClickResetIcon(name)}
              />
              <ClickableIcon
                iconProps={{
                  type: 'close',
                  color: theme.colors.primary.red,
                }}
                onClick={(e) => handleRemoveField(e, itemIndex)}
              />
            </BulletListItem>
          );
        })}
        <FiledAddButton hierarchy={ButtonHierarchy.Parent} onClick={handleClickAddFiled}>
          <Icon type="plus" color={theme.colors.primary.red} />
          <Typography type="body5" color={theme.colors.primary.red}>
            필드 추가
          </Typography>
        </FiledAddButton>
      </AnswerList>
    </div>
  );
}

const AnswerList = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BulletListItem = styled.li`
  display: flex;
  margin-inline: 16px;
  align-items: center;
  gap: 12px;
  min-height: 64px;
`;

const FiledAddButton = styled(Button)`
  display: flex;
  align-self: center;
  align-items: center;
  transition: all 0.15s ease-in;

  &:hover {
    background-color: ${theme.palette.red100};
  }
`;

export default TitleWithIntroductions;
