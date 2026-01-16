import { Test, TestingModule } from '@nestjs/testing';
import { FaixaRemuneracaoController } from './faixa-remuneracao.controller';
import { FaixaRemuneracaoService } from './faixa-remuneracao.service';

describe('FaixaRemuneracaoController', () => {
  let controller: FaixaRemuneracaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaixaRemuneracaoController],
      providers: [FaixaRemuneracaoService],
    }).compile();

    controller = module.get<FaixaRemuneracaoController>(FaixaRemuneracaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
