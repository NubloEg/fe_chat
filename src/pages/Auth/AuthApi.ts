import { httpPost } from "../../common/BaseApi";

export const signInApi = (email: string, password: string) => {
  return httpPost("https://express-chat-be.vercel.app/login", { email, password });
};

export const signUpApi = (
  email: string,
  password: string,
  username: string
) => {
  return httpPost("https://express-chat-be.vercel.app/register", {
    email,
    password,
    username,
  });
};
