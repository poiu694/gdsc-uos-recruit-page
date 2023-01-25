// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TeamContent } from 'gdsc-uos-design-system';
import { QuestionContent } from '../../constants';
import { QuestionListItem } from '../../../@types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamContent<QuestionListItem[]>>
) {
  if (req.method === 'GET') {
    res.status(200).json(QuestionContent);
  }
}
