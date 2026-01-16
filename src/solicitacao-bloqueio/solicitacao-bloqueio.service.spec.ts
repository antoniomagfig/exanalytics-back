import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaoBloqueioService } from './solicitacao-bloqueio.service';

describe('SolicitacaoBloqueioService', () => {
  let service: SolicitacaoBloqueioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolicitacaoBloqueioService],
    }).compile();

    service = module.get<SolicitacaoBloqueioService>(SolicitacaoBloqueioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
