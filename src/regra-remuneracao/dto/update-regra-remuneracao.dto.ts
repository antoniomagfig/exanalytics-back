import { PartialType } from '@nestjs/mapped-types';
import { CreateRegraRemuneracaoDto } from './create-regra-remuneracao.dto';

export class UpdateRegraRemuneracaoDto extends PartialType(CreateRegraRemuneracaoDto) {}
