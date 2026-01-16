import { Injectable } from '@nestjs/common';
import { CreateDashboardMedicoDto } from './dto/create-dashboard-medico.dto';
import { UpdateDashboardMedicoDto } from './dto/update-dashboard-medico.dto';

@Injectable()
export class DashboardMedicoService {
  create(createDashboardMedicoDto: CreateDashboardMedicoDto) {
    return 'This action adds a new dashboardMedico';
  }

  findAll() {
    return `This action returns all dashboardMedico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dashboardMedico`;
  }

  update(id: number, updateDashboardMedicoDto: UpdateDashboardMedicoDto) {
    return `This action updates a #${id} dashboardMedico`;
  }

  remove(id: number) {
    return `This action removes a #${id} dashboardMedico`;
  }
}
