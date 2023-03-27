import { rest } from 'msw';

const application = {
  team: 'BACKEND',
  season: 'SS23',
  status: 'NONE',
  isApplyCore: false,
  questionAnswerList: [
    {
      id: 53,
      questionTeam: 'common',
      question: '앞으로 1년간 학부생 신분으로 활동하실 수 있는 상태인가요?',
      answer: '흠 불가능!',
      required: true,
      maxLength: 100,
    },
    {
      id: 54,
      questionTeam: 'common',
      question: '앞으로 1년간 학부생 신분으로 활동하실 수 있는 상태인가요?',
      answer: '흠 불가능!',
      required: true,
      maxLength: 100,
    },
  ],
};

export const applcationHandler = [
  rest.get('/api/application/:id', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(application));
  }),
];
