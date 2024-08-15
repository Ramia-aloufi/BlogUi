import { User } from './User';

export interface Comment {
  id: number;
  name: string;
  user: User;
  createdAt: Date;
}
