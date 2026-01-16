import { Test, TestingModule } from '@nestjs/testing';
import { FaixaRemuneracaoService } from './faixa-remuneracao.service';

describe('FaixaRemuneracaoService', () => {
  let service: FaixaRemuneracaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaixaRemuneracaoService],
    }).compile();

    service = module.get<FaixaRemuneracaoService>(FaixaRemuneracaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
