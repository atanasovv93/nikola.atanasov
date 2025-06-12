import { Post } from '../../posts/interfaces/post.interface';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  posts?: Post[];
}