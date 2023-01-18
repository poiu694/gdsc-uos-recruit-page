import { ReactNode } from 'react';

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
export type XOR<T, U> = T | U extends Record<string, unknown>
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;

type RequiredChildren = {
  children: ReactNode;
}
export type StrictPropsWithChildren<T extends unknown | void = void> = T extends void ? RequiredChildren : T & {
  children: ReactNode;
}