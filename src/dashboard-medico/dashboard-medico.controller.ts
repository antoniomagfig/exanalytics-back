import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DashboardMedicoService } from './dashboard-medico.service';
import { CreateDashboardMedicoDto } from './dto/create-dashboard-medico.dto';
import { UpdateDashboardMedicoDto } from './dto/update-dashboard-medico.dto';

@Controller('dashboard-medico')
export class DashboardMedicoController {
  constructor(private readonly dashboardMedicoService: DashboardMedicoService) {}

  @Post()
  create(@Body() createDashboardMedicoDto: CreateDashboardMedicoDto) {
    return this.dashboardMedicoService.create(createDashboardMedicoDto);
  }

  @Get()
  findAll() {
    return this.dashboardMedicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dashboardMedicoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDashboardMedicoDto: UpdateDashboardMedicoDto) {
    return this.dashboardMedicoService.update(+id, updateDashboardMedicoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardMedicoService.remove(+id);
  }
}
