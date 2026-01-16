import { Module } from '@nestjs/common';
import { DashboardMedicoService } from './dashboard-medico.service';
import { DashboardMedicoController } from './dashboard-medico.controller';

@Module({
  controllers: [DashboardMedicoController],
  providers: [DashboardMedicoService],
})
export class DashboardMedicoModule {}
