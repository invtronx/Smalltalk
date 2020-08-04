import { User } from './user';

export interface Comment {
  _id: string;
  author: User;
  content: string;
  createdAt: Date;
}
