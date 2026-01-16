import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaoBloqueioController } from './solicitacao-bloqueio.controller';
import { SolicitacaoBloqueioService } from './solicitacao-bloqueio.service';

describe('SolicitacaoBloqueioController', () => {
  let controller: SolicitacaoBloqueioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitacaoBloqueioController],
      providers: [SolicitacaoBloqueioService],
    }).compile();

    controller = module.get<SolicitacaoBloqueioController>(SolicitacaoBloqueioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
