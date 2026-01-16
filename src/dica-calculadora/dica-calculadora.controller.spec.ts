import { Test, TestingModule } from '@nestjs/testing';
import { DicaCalculadoraController } from './dica-calculadora.controller';
import { DicaCalculadoraService } from './dica-calculadora.service';

describe('DicaCalculadoraController', () => {
  let controller: DicaCalculadoraController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DicaCalculadoraController],
      providers: [DicaCalculadoraService],
    }).compile();

    controller = module.get<DicaCalculadoraController>(DicaCalculadoraController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
