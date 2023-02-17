export function getObjectValueByPath(obj: Object, path: string) {
  let idx;
  const paths = path.split('.');
  const length = paths.length;

  for (idx = 0; idx < length; idx++) {
    const key = paths[idx] as keyof typeof obj;
    if (key != null && obj[key] != undefined) {
      obj = obj[key];
    } else {
      return null;
    }
  }
  return obj;
}

export function get<T extends Object, K extends string>(
  object: T,
  path: K | K[],
  defaultValue: undefined = undefined
) {
  if (object == null) {
    return defaultValue;
  }
  if (typeof path !== 'object') {
    return getObjectValueByPath(object, path) || defaultValue;
  }
  const result = path.map((key) => getObjectValueByPath(object, key as string));
  return object == null ? defaultValue : result;
}
