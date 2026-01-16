import { Test, TestingModule } from '@nestjs/testing';
import { DashboardMedicoService } from './dashboard-medico.service';

describe('DashboardMedicoService', () => {
  let service: DashboardMedicoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashboardMedicoService],
    }).compile();

    service = module.get<DashboardMedicoService>(DashboardMedicoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
