import { rest } from 'msw';

const introduction = {
  about:
    '열정있는 팀원들이 활동합니다.혼자 아는 것이 아니라, 다 같이 공유하는 것을 지향합니다.개발적으로 어려운 부분은 같이 머리를 맞대고 헤쳐나갑니다.다른 팀들과 소통하는 법을 배웁니다.프로젝트를 배포하면서 자신의 결과물을 보여줄 수 있는 팀입니다.',
  activity:
    '데일리 스크럼을 통해 본인의 성장을 공유합니다.직면한 문제를 공유하고, 서로의 부족한 부분을 채워줍니다.다양한 웹 프레임워크와 라이브러리를 접할기회를 갖습니다.다른 팀원들과 같이 프로젝트를 진행합니다.스프린트를 통해 프론트엔드팀 외적으로도 소통할 수 있습니다.',
  target:
    '프론트엔드를 진정으로 하고 싶으신 분.자신의 지식을 공유하는데 거리낌 없으신 분.개발을 잘 몰라 평소에 아이디어만 가지고 계셨던 분.',
};

export const introductionHandlers = [
  rest.get('/api/introduction/:type', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(introduction));
  }),
];
