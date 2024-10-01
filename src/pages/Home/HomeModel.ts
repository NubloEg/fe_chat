import { UserProfileModel } from "../Auth/AuthModel";

export interface PostModel {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  tags: string[];
  viesCount: number;
  user: UserProfileModel;
  createdAt: string;
  likesCount: { count: number; users: Array<string> };
  comments: {
    comments: Array<{
      message: string;
      date: string;
      author: string;
      authorId: string;
      _id: string;
    }>;
    count: number;
  };
}
