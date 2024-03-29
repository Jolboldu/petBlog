import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { dirname } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'development',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      cache: true,
      logging: 'all',
      database: 'database',
      username: 'postgres',
      password: 'postgres',
      dropSchema: false,
      synchronize: true,
      migrationsRun: true,
      entities: [dirname(__dirname) + '/**/*.entity.{ts,js}'],
      migrations: [__dirname + '/migrations/*.{ts,js}'],
    }),
  ],
})
export class DatabaseModule {}
