import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoExameDto } from './create-tipo-exame.dto';

export class UpdateTipoExameDto extends PartialType(CreateTipoExameDto) {}
