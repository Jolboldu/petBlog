import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IDataServices } from '../core/data-services.interface';
import { AuthorEntity } from './entities';
import { TypeormGenericRepository } from './typeorm-generic.repository';

@Injectable()
export class TypeormDataService implements IDataServices, OnApplicationBootstrap{
    authors: TypeormGenericRepository<AuthorEntity>;
    constructor(
        @InjectRepository(AuthorEntity)
        private readonly authorEntityRepository: Repository<AuthorEntity>,
    ){}

    onApplicationBootstrap() {
        this.authors = new TypeormGenericRepository<AuthorEntity>(this.authorEntityRepository);
      }
    
}