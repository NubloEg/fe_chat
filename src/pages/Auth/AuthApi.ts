import { httpGet, httpPost } from "../../common/BaseApi";

export const signInApi = (email: string, password: string) => {
  return httpPost("https://express-chat-be.vercel.app/login", {
    email,
    password,
  });
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

export const getProfileApi = () => {
  return httpGet("https://express-chat-be.vercel.app/profile", undefined);
};
