import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SumService } from './service/sum/sum-service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SumService],
})
export class AppModule {}
