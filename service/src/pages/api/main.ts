// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { TitleWithDescription } from '@types';
import { MainContent } from '@/constants';

export interface MainProcess {
  content: TitleWithDescription;
  circle: TitleWithDescription[];
}

interface MainContent {
  banner: string;
  process: MainProcess;
  team: TitleWithDescription;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<MainContent>) {
  if (req.method === 'GET') {
    res.status(200).json(MainContent);
  }
}
