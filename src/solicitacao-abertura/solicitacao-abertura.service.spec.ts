import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaoAberturaService } from './solicitacao-abertura.service';

describe('SolicitacaoAberturaService', () => {
  let service: SolicitacaoAberturaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitacaoAberturaService],
    }).compile();

    service = module.get<SolicitacaoAberturaService>(SolicitacaoAberturaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
