import { PostData } from "./HomeData";
import { PostModel } from "./HomeModel";

export const mapPostDataToModel = (posts: PostData[]): Array<PostModel> => {
  const result: PostModel[] = [];

  posts.forEach((el) => {
    result.push({ ...el, id: el._id, user: { ...el.user, id: el.user._id } });
  });

  return result;
};
