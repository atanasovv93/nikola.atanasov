import { Injectable, ConflictException, NotFoundException, Inject, forwardRef } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class UsersService {
  private users: User[] = [];

  constructor(
    @Inject(forwardRef(() => PostsService))
    private postsService: PostsService,
  ) {}

  create(user: User): User {
    if (this.users.some(u => u.email === user.email)) {
      throw new ConflictException('Email already exists');
    }
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find(u => u.id === id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  findPostsByUser(userId: number) {
    return this.postsService.findByAuthorId(userId);
  }
}