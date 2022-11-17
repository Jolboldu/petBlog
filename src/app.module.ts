import { Module } from '@nestjs/common';
import { AuthorController } from './controllers';
import { AuthorUseCasesModule } from './use-cases/author';
import { DataServicesModule } from './data-services';
import { DatabaseModule } from './database';

@Module({
  imports: [DatabaseModule, DataServicesModule, AuthorUseCasesModule],
  controllers: [AuthorController],
  providers: [],
})
export class AppModule {}
