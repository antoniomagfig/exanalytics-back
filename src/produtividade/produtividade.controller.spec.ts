import { Test, TestingModule } from '@nestjs/testing';
import { ProdutividadeController } from './produtividade.controller';
import { ProdutividadeService } from './produtividade.service';

describe('ProdutividadeController', () => {
  let controller: ProdutividadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdutividadeController],
      providers: [ProdutividadeService],
    }).compile();

    controller = module.get<ProdutividadeController>(ProdutividadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
