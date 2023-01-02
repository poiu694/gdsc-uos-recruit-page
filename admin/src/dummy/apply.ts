import { ApplyState } from '../@types';

const dummyApply = {
  id: '',
  name: '홍길동',
  team: 'frontend',
  state: '1차 합격' as ApplyState
};

export const DUMMY_APPLYS = Array.from({ length: 50 }).map((_, idx) => ({
  ...dummyApply,
  id: idx + 1,
  team:
    idx % 5 === 0
      ? ('FRONTEND' as any)
      : idx % 4 === 0
      ? ('BACKEND' as any)
      : idx % 3 === 0
      ? ('DATA_ML' as any)
      : idx % 2 === 0
      ? ('DESIGN' as any)
      : ('MOBILE' as any),
  state:
    idx % 5 === 0
      ? ('서류 합격' as ApplyState)
      : idx % 4 === 0
      ? ('서류 불합격' as ApplyState)
      : idx % 3 === 0
      ? ('최종 합격' as ApplyState)
      : idx % 2 === 0
      ? ('최종 불합격' as ApplyState)
      : ('서류 제출' as ApplyState),
}));
