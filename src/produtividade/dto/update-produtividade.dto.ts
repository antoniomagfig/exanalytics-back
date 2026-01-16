import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutividadeDto } from './create-produtividade.dto';

export class UpdateProdutividadeDto extends PartialType(CreateProdutividadeDto) {}
