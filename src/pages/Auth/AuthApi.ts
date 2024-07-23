import { httpPost } from "../../common/BaseApi";

export const signInApi = (email: string, password: string) => {
  return httpPost("http://localhost:5088/login", { email, password });
};

export const signUpApi = (
  email: string,
  password: string,
  username: string
) => {
  return httpPost("http://localhost:5088/register", {
    email,
    password,
    username,
  });
};
