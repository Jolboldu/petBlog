import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { IDataServices } from '../../core/data-services.interface';
import {
  AuthorEntity
} from './entities';
import { TypeormDataService } from './typeorm-data-service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ AuthorEntity ]),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: TypeormDataService,
    },
  ],
  exports: [IDataServices],
})
export class TypeormDataServicesModule {}
