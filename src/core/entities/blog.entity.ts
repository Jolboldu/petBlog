import { AuthorEntity } from './author.entity';
export class BlogEntity{
    title: string;
    author: AuthorEntity;
    conent: string;
}