import { rest } from 'msw';

const todos = ['먹기', '자기', '놀기'];

export const handlers = [
  // 할일 목록
  rest.get('/todos2', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos));
  }),

  // 할일 추가
  rest.post('/todos2', async (req, res, ctx) => {
    const item = await req.text();
    todos.push(item);
    return res(ctx.status(201));
  }),
];
