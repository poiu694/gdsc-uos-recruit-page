// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TeamContent } from '@gdsc-uos-recruit-page/design-system/@types/Team';
import { IntroductionContent } from '../../constants';
import { IntroductionType } from '../../../@types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamContent<IntroductionType>>
) {
  if (req.method === 'GET') {
    res.status(200).json(IntroductionContent);
  }
}
