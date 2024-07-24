import { httpGet } from "../../common/BaseApi";

export const getAllPostsApi = () => {
  return httpGet("https://express-chat-be.vercel.app/posts", undefined);
};
