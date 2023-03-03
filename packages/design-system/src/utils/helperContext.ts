import React from 'react';

export function createGenericContext<T>() {
  return React.createContext<T>({} as T);
}

export function createGenericUseContext<T>(context: React.Context<T>): () => NonNullable<T> {
  return (): NonNullable<T> => {
    const value: T = React.useContext<T>(context as React.Context<T>);

    return value as NonNullable<T>;
  };
}
