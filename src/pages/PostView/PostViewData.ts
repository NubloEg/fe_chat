import { UserProfileData } from "../Auth/AuthData";

export interface PostData {
  _id: string;
  title: string;
  text: string;
  imageUrl: string;
  tags: string[];
  viesCount: number;
  user: UserProfileData;
  createdAt: string;
  likesCount: { count: number; users: string[] };
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
