import { Test, TestingModule } from '@nestjs/testing';
import { NestjsTypeormService } from './nestjs-typeorm.service';

describe('NestjsTypeormService', () => {
  let service: NestjsTypeormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsTypeormService],
    }).compile();

    service = module.get<NestjsTypeormService>(NestjsTypeormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
