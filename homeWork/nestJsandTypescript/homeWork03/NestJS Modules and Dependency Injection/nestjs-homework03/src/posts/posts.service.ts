import { Injectable, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { Post } from './interfaces/post.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {}

  create(post: Post): Post {
    const user = this.usersService.findOne(post.authorId);
    post.author = user;
    this.posts.push(post);
    return post;
  }

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    const post = this.posts.find(p => p.id === id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  findByAuthorId(authorId: number): Post[] {
    return this.posts.filter(post => post.authorId === authorId);
  }
}