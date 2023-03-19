export const UserRole = {
  lead: 'lead',
  core: 'core',
  normal: 'normal',
} as const;

export type UserType = keyof typeof UserRole;
