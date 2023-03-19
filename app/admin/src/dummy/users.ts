import { UserType } from '@/@types';

const user = {
  name: '홍길동',
  type: 'normal',
  email: '1234',
  password: '1234',
};

export const DUMMY_ADMIN_USERS = Array.from({ length: 150 }).map((_, idx) => {
  return {
    ...user,
    id: `${idx}`,
    type: idx % 5 === 0 ? ('lead' as UserType) : ('core' as UserType),
    team:
      idx % 5 === 0
        ? ('frontend' as any)
        : idx % 4 === 0
        ? ('backend' as any)
        : idx % 3 === 0
        ? ('data_ml' as any)
        : idx % 2 === 0
        ? ('design' as any)
        : ('mobile' as any),
  };
});
