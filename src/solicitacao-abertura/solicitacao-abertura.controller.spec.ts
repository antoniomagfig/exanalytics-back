import { Test, TestingModule } from '@nestjs/testing';
import { SolicitacaoAberturaController } from './solicitacao-abertura.controller';
import { SolicitacaoAberturaService } from './solicitacao-abertura.service';

describe('SolicitacaoAberturaController', () => {
  let controller: SolicitacaoAberturaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SolicitacaoAberturaController],
      providers: [SolicitacaoAberturaService],
    }).compile();

    controller = module.get<SolicitacaoAberturaController>(SolicitacaoAberturaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
