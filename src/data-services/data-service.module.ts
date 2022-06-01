import { Module } from '@nestjs/common';
import { TypeormDataService } from '../frameworks/database-repositories/typeorm-data-service';

@Module({
  imports: [TypeormDataService],
  exports: [TypeormDataService],
})
export class DataServicesModule {}
