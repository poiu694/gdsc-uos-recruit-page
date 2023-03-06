export function stringifyFormItem<T extends object>(formItem: T) {
  if (typeof formItem === 'object' && formItem !== null) {
    return JSON.stringify(formItem);
  }
  return `${formItem}`;
}

export function createFormData(input: Record<string, unknown>): FormData {
  return Object.keys(input || {}).reduce((formData, key) => {
    const property = input[key];
    const propertyContent = property instanceof Array ? property : [property];

    for (const formItem of propertyContent) {
      const isFileType = formItem instanceof Blob || formItem instanceof File;
      formData.append(key, isFileType ? formItem : stringifyFormItem(formItem));
    }
    return formData;
  }, new FormData());
}
