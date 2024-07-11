import { httpPost } from "../../common/BaseApi";

export const signInApi = (email: string, password: string) => {
  return httpPost("http://localhost:5088/login", { email, password });
};

export const signUpApi = (
  email: string,
  password: string,
  username: string
) => {
  const result = httpPost("http://localhost:5088/register", {
    email,
    password,
    username,
  });
  console.log(result);
  return result;
};
