import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as BlogPost } from './interfaces/post.interface';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post()
  create(@Body() post: BlogPost): BlogPost {
    return this.postsService.create(post);
  }

  @Get()
  findAll(): BlogPost[] {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): BlogPost {
    return this.postsService.findOne(+id);
  }
  
}