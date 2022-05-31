import { IGenericRepository } from './generic-repository.abstract';
import { AuthorEntity, BlogEntity } from './entities';

export interface IDataServices {
    authors: IGenericRepository<AuthorEntity>;
    blogs: IGenericRepository<BlogEntity>;
}