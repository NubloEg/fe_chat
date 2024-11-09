import { UserProfileData } from "../Auth/AuthData";

export interface DialogData {
  _id: string;
  author: UserProfileData;
  partner: UserProfileData;
}
