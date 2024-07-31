import { httpGet } from "../../common/BaseApi";

export const getPostApi = (id: string) => {
  return httpGet(`https://express-chat-be.vercel.app/posts/${id}`, undefined);
};
