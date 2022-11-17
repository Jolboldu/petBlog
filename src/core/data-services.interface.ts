import { IGenericRepository } from './generic-repository.interface';
import { Author, Blog } from './entities';

export abstract class IDataServices {
  authors: IGenericRepository<Author>;
  // blogs: IGenericRepository<Blog>;
}
