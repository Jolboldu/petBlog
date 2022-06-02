import { Module } from '@nestjs/common';
import { TypeormDataService } from '../frameworks/typeorm-data-services.service';

@Module({
  imports: [TypeormDataService],
  exports: [TypeormDataService],
})
export class DataServicesModule {}
