import { Test, TestingModule } from '@nestjs/testing';
import { DicaCalculadoraService } from './dica-calculadora.service';

describe('DicaCalculadoraService', () => {
  let service: DicaCalculadoraService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DicaCalculadoraService],
    }).compile();

    service = module.get<DicaCalculadoraService>(DicaCalculadoraService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
