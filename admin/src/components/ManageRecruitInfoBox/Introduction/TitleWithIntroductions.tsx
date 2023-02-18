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
import { Path, FieldError, useFieldArray, useFormContext } from 'react-hook-form';

import { IntroductionList } from '../../../@types';
import { get, isCurrentTypeValid, validateChecker } from '../../../utils';

interface Props {
  index: number;
}

function TitleWithIntroductions({ index }: Props) {
  const {
    formState: { errors, dirtyFields },
    control,
    register,
    getValues,
  } = useFormContext();
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
    [fields]
  );

  const handleRemoveField = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, index: number) => {
      e.preventDefault();
      e.stopPropagation();
      remove(index);
    },
    [fields]
  );

  return (
    <div>
      <Typography type="h5" style={{ marginTop: 12 }}>
        {getValues(`introductions.${index}.title`)}
      </Typography>
      <AnswerList>
        {fields?.map((introduction, itemIndex) => {
          const name: Path<IntroductionList> = `introductions.${index}.list.${itemIndex}`;
          const isDirty = !!get(dirtyFields, name);
          const isError = typeof get(errors, name) !== 'undefined';
          return (
            <BulletListItem key={introduction.id}>
              <Typography type="body5">•</Typography>
              <Input
                {...register(name, validateChecker('essential'))}
                id={name}
                placeholder="소개글을 입력해주세요."
                key={name}
                isError={isError}
                isDirty={isDirty}
                isValid={isCurrentTypeValid(isDirty, name, errors)}
                errorMessage={(get(errors, name) as FieldError)?.message}
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
