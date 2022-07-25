// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MainContent } from '../../constants';
import { TitleOneDesc, TitleTwoDesc } from '../../../@types';

export interface MainProcess {
  content: TitleTwoDesc;
  circle: TitleOneDesc[];
}

interface MainContent {
  banner: string;
  process: MainProcess;
  team: TitleTwoDesc;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MainContent>
) {
  if (req.method === 'GET') {
    res.status(200).json(MainContent);
  }
}
