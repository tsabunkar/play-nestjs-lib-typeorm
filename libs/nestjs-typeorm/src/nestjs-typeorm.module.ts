import { Module } from '@nestjs/common';
import { NestjsTypeormService } from './nestjs-typeorm.service';

@Module({
  providers: [NestjsTypeormService],
  exports: [NestjsTypeormService],
})
export class NestjsTypeormModule {}
