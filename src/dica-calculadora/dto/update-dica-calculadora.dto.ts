import { PartialType } from '@nestjs/mapped-types';
import { CreateDicaCalculadoraDto } from './create-dica-calculadora.dto';

export class UpdateDicaCalculadoraDto extends PartialType(CreateDicaCalculadoraDto) {}
