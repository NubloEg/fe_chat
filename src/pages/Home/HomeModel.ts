import { UserProfileModel } from "../Auth/AuthModel";

export interface PostModel {
  id: string;
  title: string;
  text: string;
  imageUrl: string;
  tags: string[];
  viesCount: number;
  user: UserProfileModel;
}
