import { User } from './user';

export interface Notification {
  userAgent: User;
  action: string;
  time: Date | string;
  redirectTo?: string;
}
