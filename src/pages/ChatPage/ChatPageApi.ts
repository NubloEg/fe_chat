import { httpGet } from "../../common/BaseApi";

export const getUsersApi = () => {
  return httpGet("https://express-chat-be.vercel.app/users", undefined);
};

export const getDialogsApi = () => {
  return httpGet("https://express-chat-be.vercel.app/dialogs", undefined);
};
