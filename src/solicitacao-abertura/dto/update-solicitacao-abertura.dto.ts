import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitacaoAberturaDto } from './create-solicitacao-abertura.dto';

export class UpdateSolicitacaoAberturaDto extends PartialType(CreateSolicitacaoAberturaDto) {}
