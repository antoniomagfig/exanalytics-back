import { Test, TestingModule } from '@nestjs/testing';
import { ConfigGeralService } from './config-geral.service';

describe('ConfigGeralService', () => {
  let service: ConfigGeralService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigGeralService],
    }).compile();

    service = module.get<ConfigGeralService>(ConfigGeralService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
