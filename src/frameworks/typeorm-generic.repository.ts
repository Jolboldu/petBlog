import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { IGenericRepository } from '../core/generic-repository.interface';

@Injectable()
export class TypeormGenericRepository<T> implements IGenericRepository<T>{
    private _repository: Repository<T>;

    constructor(repository: Repository<T>) {
        this._repository = repository;
    }

    getAll(): Promise<T[]> {
        return this._repository.find();
    }

    get(id: string): Promise<T> {
        return this._repository.findOne({});
    }

    update(id: string, item: T): Promise<T> {
        return;
    }

    delete(id: string): Promise<T> {
        return;
    }

    create(item: T): Promise<T> {
        return this._repository.save(item);
    }
}