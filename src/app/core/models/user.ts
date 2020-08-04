export interface User {
  username: string;
  name: string;
  email: string;
  gender: string;
  followers: number;
  following: number;
  joinedOn: Date;
  isFollowing?: boolean;
  bio?: string;
  birthday?: Date | string;
  profilePic?: string;
}
