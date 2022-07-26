// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { QuestionContent } from '../../constants';
import { TitleOneDesc } from '../../../@types';

interface QuestionContent {
  common: TitleOneDesc[];
  front: TitleOneDesc[];
  back: TitleOneDesc[];
  mobile: TitleOneDesc[];
  data_ml: TitleOneDesc[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuestionContent>
) {
  if (req.method === 'GET') {
    res.status(200).json(QuestionContent);
  }
}
