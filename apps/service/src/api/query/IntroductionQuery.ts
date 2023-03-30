import { useQuery } from 'react-query';
import { getJobByTeam, getTitleCaseTeam, TeamKeyType } from '@gdsc-uos/ui';
import { IntroductionService } from '../service';

const INTRODUCTION_KEY = 'introduction';

export const useIntroductionQuery = (teamName: TeamKeyType) =>
  useQuery({
    queryKey: [INTRODUCTION_KEY, teamName],
    queryFn: async () => {
      const data = await IntroductionService.getIntroductionByType(teamName);

      return {
        about: data.about.split('.').filter((data) => data),
        target: data.target.split('.').filter((data) => data),
        activity: data.activity.split('.').filter((data) => data),
        title: getJobByTeam(teamName).join(' '),
        desc: `GDSC UOS ${getTitleCaseTeam(teamName)} 소개 페이지입니다.`,
        aside: {
          team: `${getTitleCaseTeam(teamName)} Team`,
          experience: '무관',
          needs: ['열정', '끈기'],
        },
      };
    },
  });
