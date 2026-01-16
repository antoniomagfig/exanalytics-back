import { Test, TestingModule } from '@nestjs/testing';
import { ConfigGeralController } from './config-geral.controller';
import { ConfigGeralService } from './config-geral.service';

describe('ConfigGeralController', () => {
  let controller: ConfigGeralController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConfigGeralController],
      providers: [ConfigGeralService],
    }).compile();

    controller = module.get<ConfigGeralController>(ConfigGeralController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
