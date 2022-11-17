import { Author } from './author';
export class Blog {
  constructor(title: string, author: Author, content: string) {
    this.title = title;
    this.author = author;
    this.content = content;
  }

  title: string;
  author: Author;
  content: string;
}
