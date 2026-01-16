import { Test, TestingModule } from '@nestjs/testing';
import { TipoEscalaController } from './tipo-escala.controller';
import { TipoEscalaService } from './tipo-escala.service';

describe('TipoEscalaController', () => {
  let controller: TipoEscalaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoEscalaController],
      providers: [TipoEscalaService],
    }).compile();

    controller = module.get<TipoEscalaController>(TipoEscalaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
