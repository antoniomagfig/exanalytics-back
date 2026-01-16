import { Test, TestingModule } from '@nestjs/testing';
import { RegraRemuneracaoService } from './regra-remuneracao.service';

describe('RegraRemuneracaoService', () => {
  let service: RegraRemuneracaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegraRemuneracaoService],
    }).compile();

    service = module.get<RegraRemuneracaoService>(RegraRemuneracaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
