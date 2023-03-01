import React from 'react';

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

const readLocalStorage = <T>(key: string, initialValue: T): T => {
  if (typeof window === 'undefined') {
    return initialValue;
  }

  try {
    const item = window.localStorage.getItem(key);
    return item ? (parseJSON(item) as T) : initialValue;
  } catch (error) {
    return initialValue;
  }
};

const useLocalStorage = <T>(key: string, initialValue: T): [T, SetValue<T>] => {
  const [storedValue, setStoredValue] = React.useState<T>(() =>
    readLocalStorage(key, initialValue)
  );

  const setValue: SetValue<T> = React.useCallback((value) => {
    if (typeof window === 'undefined') {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      );
      return;
    }

    try {
      const nextValue = value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(nextValue));
      setStoredValue(nextValue);

    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  }, []);

  React.useEffect(() => {
    setStoredValue(() => readLocalStorage(key, initialValue));
  }, []);

  return [storedValue, setValue];
};

export default useLocalStorage;

function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.log('parsing error on', { value });
    return undefined;
  }
}
