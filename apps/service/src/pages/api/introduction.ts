// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TeamContent } from '@gdsc-uos/ui';

import { IntroductionType } from '@types';
import { IntroductionContent } from '@/constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TeamContent<IntroductionType>>,
) {
  if (req.method === 'GET') {
    res.status(200).json(IntroductionContent);
  }
}
