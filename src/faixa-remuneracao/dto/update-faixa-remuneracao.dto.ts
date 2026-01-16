import { PartialType } from '@nestjs/mapped-types';
import { CreateFaixaRemuneracaoDto } from './create-faixa-remuneracao.dto';

export class UpdateFaixaRemuneracaoDto extends PartialType(CreateFaixaRemuneracaoDto) {}
