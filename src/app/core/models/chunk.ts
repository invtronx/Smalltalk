import { User } from './user';

export interface Chunk {
  _id: string;
  slug: string;
  author: User;
  content: string;
  commentCount: number;
  likeCount: number;
  createdAt: Date;
  tags: [string];
  isLiked: boolean;
  sharedSource?: Chunk;
}
