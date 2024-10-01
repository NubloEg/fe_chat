import { httpGet, httpPatch } from "../../common/BaseApi";

export const getPostApi = (id: string) => {
  return httpGet(`https://express-chat-be.vercel.app/posts/${id}`, undefined);
};

export const likePostApi = (id: string) => {
  return httpPatch(
    `https://express-chat-be.vercel.app/addLike/${id}`,
    undefined
  );
};

export const dislikePostApi = (id: string) => {
  return httpPatch(
    `https://express-chat-be.vercel.app/disLike/${id}`,
    undefined
  );
};

export const addCommentPostApi = (
  message: string,
  date: string,
  author: string,
  postId: string
) => {
  return httpPatch(`https://express-chat-be.vercel.app/addComment/${postId}`, {
    message,
    date,
    author,
  });
};
