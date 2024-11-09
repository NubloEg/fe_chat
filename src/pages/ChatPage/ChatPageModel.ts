import { UserProfileModel } from "../Auth/AuthModel";

export interface DialogModel {
  id: string;
  author: UserProfileModel;
  partner: UserProfileModel;
}
