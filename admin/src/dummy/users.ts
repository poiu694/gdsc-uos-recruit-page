const user = {

  name: '홍길동',
  type: 'normal',
  email: '1234',
  password: '1234'
}

export const DUMMY_ADMIN_USERS = Array.from({ length: 150 }).map((_, idx) => {
  return {
    ...user,
    id: idx,
    type: (idx % 5 === 0 ? 'super': 'normal' as 'super' | 'normal')
  }
})