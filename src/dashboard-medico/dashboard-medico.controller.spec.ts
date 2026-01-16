import { Test, TestingModule } from '@nestjs/testing';
import { DashboardMedicoController } from './dashboard-medico.controller';
import { DashboardMedicoService } from './dashboard-medico.service';

describe('DashboardMedicoController', () => {
  let controller: DashboardMedicoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DashboardMedicoController],
      providers: [DashboardMedicoService],
    }).compile();

    controller = module.get<DashboardMedicoController>(DashboardMedicoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
