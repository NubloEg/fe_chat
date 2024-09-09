import axios from "axios";

export const httpPost = (url: string, data: unknown) => {
  const result = baseApi(url, "POST", data);
  return result;
};

export const httpPostForm = async (url: string, formData: FormData) => {
  const token = getTokenFromSessionStorage();
  const { data } = await axios.post(url, formData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  //const result = baseApiForm(url, "POST", data);
  return data;
};

export const httpGet = (url: string, data: unknown) => {
  const result = baseApi(url, "GET", data);
  return result;
};

export const httpPatch = (url: string, data: unknown) => {
  const result = baseApi(url, "PATCH", data);
  return result;
};

export const getTokenFromSessionStorage = () => {
  return sessionStorage.getItem("token") || "";
};

const baseApi = (url: string, method: string, data: unknown) => {
  const token = getTokenFromSessionStorage();
  const result = fetch(url, {
    method: method,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: data ? JSON.stringify(data) : undefined,
  }).then((res) => res);

  return handleError(result);
};

const baseApiForm = (url: string, method: string, formData: FormData) => {
  const token = getTokenFromSessionStorage();
  const result = fetch(url, {
    method: method,
    mode: "no-cors",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: formData,
  }).then((res) => res);
  result.catch((err) => console.error(err));
  return handleError(result);
};

const handleError = async (response: Promise<Response>) => {
  const status = await chekStatus(response);
  if (status !== 200) {
    const error = await getResult(response);
    throw new Error(error.length ? error[0].msg : error.message);
  }
  console.log("no if");
  return await getResult(response);
};

const chekStatus = (response: Promise<Response>) => {
  return response.then((res) => res.status);
};

const getResult = (response: Promise<Response>) => {
  const result = response
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
  return result;
};
