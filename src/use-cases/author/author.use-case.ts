import { Injectable } from '@nestjs/common';
import { Author } from '../../core/entities';
import { IDataServices } from '../../core/data-services.interface';
import { CreateAuthorDto } from '../../core/dto';

@Injectable()
export class AuthorUseCase{
    constructor(private dataServices: IDataServices){
    }

    getAllAuthors(): Promise<Author[]> {
        return this.dataServices.authors.getAll();
      }
    
      getAuthorById(id: any): Promise<Author> {
        return this.dataServices.authors.get(id);
      }
    
      createAuthor(data: CreateAuthorDto): Promise<Author> {
        const author = new Author(data.firstName, data.lastName, data.email, data.pseudonym);
        return this.dataServices.authors.create(author);
      }
    }