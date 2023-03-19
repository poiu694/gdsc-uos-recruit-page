// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TeamContent } from '@gdsc-uos/ui';

import { QuestionListItem } from '@types';
import { QuestionContent } from '@/constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamContent<QuestionListItem[]>>,
) {
  if (req.method === 'GET') {
    res.status(200).json(QuestionContent);
  }
}
