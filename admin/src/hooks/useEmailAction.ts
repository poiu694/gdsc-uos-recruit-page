import React from 'react';
import { ApplyState, UserApplication } from '../@types';

/**
 * textArea와 email의 개행문자를 맞춰주는 유틸
 * @param text 이메일 내용
 * @returns 텍스트의 개행문자를 이메일 형식으로 바꾼 문자열
 */
const formatEmailBody = (text: string) => {
  return text.replaceAll('\n', '%0D%0A');
};

const useEmailAction = () => {
  const [emailSet, setEmailSetList] = React.useState<Set<UserApplication>>(new Set());
  const selectedEmailList = [...emailSet];

  /**
   * filter에 따라 보여지는 list를 관리하는 유틸 함수
   */
  const getFilteredList = React.useCallback(
    (list: UserApplication[], statusFilter: ApplyState | '전체', seasonFilter: string) => {
      let result = [...list];

      result = result.filter((item) => statusFilter === '전체' || item.status === statusFilter);
      result = result.filter(
        (item) =>
          seasonFilter === '전체' ||
          item.season === seasonFilter
      );
      return result;
    },
    []
  );

  const FormatMailHref = (emailList: UserApplication[], title: string, content: string) =>
    React.useMemo(
      () =>
        `mailto:${emailList
          .map((user) => user.email)
          .join(',')}?subject=${title}&body=${formatEmailBody(content)}`,
      [emailList, title, content]
    );

  const isSelectedEmail = React.useCallback(
    (email: UserApplication) => {
      return emailSet.has(email);
    },
    [emailSet]
  );

  const isAllActiveEmail = React.useCallback(
    (email: UserApplication[]) => {
      return email.every((item) => emailSet.has(item));
    },
    [emailSet]
  );

  const toggleEmailList = (
    set: Set<UserApplication>,
    item: UserApplication,
    forceValue?: 'on' | 'off'
  ) => {
    if (set.has(item)) {
      if (forceValue === 'on') return set;
      set.delete(item);
    } else {
      if (forceValue === 'off') return set;
      set.add(item);
    }
    return set;
  };

  const updateEmailList = React.useCallback(
    (nextEmailItem: UserApplication[] | UserApplication) => {
      if (Array.isArray(nextEmailItem)) {
        let nextEmailSet = new Set(emailSet);
        const activeValue = isAllActiveEmail(nextEmailItem);
        nextEmailItem.forEach((email) => {
          nextEmailSet = toggleEmailList(nextEmailSet, email, activeValue ? 'off' : 'on');
        });
        setEmailSetList(nextEmailSet);
      } else {
        const nextEmailSet = toggleEmailList(new Set(emailSet), nextEmailItem);
        setEmailSetList(nextEmailSet);
      }
    },
    [emailSet]
  );

  return {
    selectedEmailList,
    isAllActiveEmail,
    FormatMailHref,
    isSelectedEmail,
    getFilteredList,
    updateEmailList,
  };
};

export default useEmailAction;
