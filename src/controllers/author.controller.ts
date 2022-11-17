import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { CreateAuthorDto } from '../core/dto';
import { AuthorUseCase } from '../use-cases/author/author.use-case';

@Controller('api/author')
export class AuthorController {
  constructor(private authorUseCases: AuthorUseCase) {}

  @Get()
  async getAll() {
    // return 'hello bob clean architect'
    return this.authorUseCases.getAllAuthors();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.authorUseCases.getAuthorById(id);
  }

  @Post()
  createAuthor(@Body() authorDto: CreateAuthorDto) {
    return this.authorUseCases.createAuthor(authorDto);
  }
}
