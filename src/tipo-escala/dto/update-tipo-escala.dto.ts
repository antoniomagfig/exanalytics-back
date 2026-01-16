import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEscalaDto } from './create-tipo-escala.dto';

export class UpdateTipoEscalaDto extends PartialType(CreateTipoEscalaDto) {}
