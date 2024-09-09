import { httpPost } from "../../common/BaseApi";

export const createPostApi = (post: {
  title: string;
  text: string;
  imageUrl?: string;
}) => {
  return httpPost("https://express-chat-be.vercel.app/posts", post);
};
