import { QuestionListItem } from '../../@types';
import { QuestionContent } from '../constants';

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const getQuestion = (type: string) => {
  switch (type) {
    case 'common':
      return QuestionContent.common;     
    case 'frontend':
      return QuestionContent.front;
    case 'backend':
      return QuestionContent.back;
    case 'mobile':
      return QuestionContent.mobile;
    case 'data_ml':
      return QuestionContent.data_ml;
    default:
      return QuestionContent.common;
  }
}