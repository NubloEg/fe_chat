import { UserProfileData } from "../Auth/AuthData";

export interface PostData {
  _id: string;
  title: string;
  text: string;
  imageUrl: string;
  tags: string[];
  viesCount: number;
  user: UserProfileData;
}
