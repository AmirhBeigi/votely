export const formData = (params: any) => {
  let formData = new FormData();
  for (const [key, value] of Object.entries(params)) {
    if (value instanceof Array)
      value.forEach((v) => formData.append(`${key}[]`, JSON.stringify(v)));
    else formData.append(key, value);
  }
  return formData;
};
