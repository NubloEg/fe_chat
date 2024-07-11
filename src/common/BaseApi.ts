export const httpPost = (url: string, data: unknown) => {
  const result = baseApi(url, "POST", data);
  return result;
};

const baseApi = (url: string, method: string, data: unknown) => {
  const result: any = fetch(url, {
    method: method,
    headers: {
      Authorization: "Bearer ",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log(response.json());
      return response.json();
    })
    .then((data) => data);
  return handleError(result);
};

const handleError = (response: Response) => {
  console.log(response);
  if (response?.status !== 200) {
    throw new Error("hello");
  }

  return response;
};
