import { Test, TestingModule } from '@nestjs/testing';
import { TipoEscalaService } from './tipo-escala.service';

describe('TipoEscalaService', () => {
  let service: TipoEscalaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoEscalaService],
    }).compile();

    service = module.get<TipoEscalaService>(TipoEscalaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
