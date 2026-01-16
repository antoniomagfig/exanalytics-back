import { Test, TestingModule } from '@nestjs/testing';
import { ProdutividadeService } from './produtividade.service';

describe('ProdutividadeService', () => {
  let service: ProdutividadeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdutividadeService],
    }).compile();

    service = module.get<ProdutividadeService>(ProdutividadeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
