export const httpPost = (url: string, data: unknown) => {
  const result = baseApi(url, "POST", data);
  return result;
};

const baseApi = (url: string, method: string, data: unknown) => {
  const result = fetch(url, {
    method: method,
    headers: {
      Authorization: "Bearer ",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  }).then((res) => res);

  return handleError(result);
};

const handleError = async (response: Promise<Response>) => {
  const status = await chekStatus(response);

  if (status !== 200) {
    const error = await getResult(response);

    throw new Error(error.length ? error[0].msg : error.message);
  }

  return await getResult(response);
};

const chekStatus = (response: Promise<Response>) => {
  return response.then((res) => res.status);
};

const getResult = (response: Promise<Response>) => {
  const result = response.then((res) => res.json()).then((data) => data);
  return result;
};
