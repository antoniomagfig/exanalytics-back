import { Test, TestingModule } from '@nestjs/testing';
import { RegraRemuneracaoController } from './regra-remuneracao.controller';
import { RegraRemuneracaoService } from './regra-remuneracao.service';

describe('RegraRemuneracaoController', () => {
  let controller: RegraRemuneracaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegraRemuneracaoController],
      providers: [RegraRemuneracaoService],
    }).compile();

    controller = module.get<RegraRemuneracaoController>(RegraRemuneracaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
