import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../data-services/data-service.module';
import { AuthorUseCase } from './author.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [AuthorUseCase],
  exports: [AuthorUseCase],
})
export class AuthorUseCasesModule {}
