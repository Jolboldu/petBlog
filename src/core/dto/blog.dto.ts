import { Author } from '../entities/author';
export class CreateBlogDto {
  title: string;
  author: Partial<Author>;
  content: string;
}
