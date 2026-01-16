import { PartialType } from '@nestjs/mapped-types';
import { CreateDashboardMedicoDto } from './create-dashboard-medico.dto';

export class UpdateDashboardMedicoDto extends PartialType(CreateDashboardMedicoDto) {}
