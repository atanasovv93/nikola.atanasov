import { User } from '../../users/interfaces/user.interface';

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
  author?: User;
}