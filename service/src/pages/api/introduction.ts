// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { IntroductionContent } from '../../constants';
import { IntroductionType, TitleOneDesc } from '../../../@types';

interface IntroductionContent {
  frontend: IntroductionType;
  backend: IntroductionType;
  mobile: IntroductionType;
  data_ml: IntroductionType;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IntroductionContent>
) {
  if (req.method === 'GET') {
    res.status(200).json(IntroductionContent);
  }
}
