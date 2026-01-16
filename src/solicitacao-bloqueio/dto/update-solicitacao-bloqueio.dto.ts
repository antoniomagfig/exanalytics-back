import { PartialType } from '@nestjs/mapped-types';
import { CreateSolicitacaoBloqueioDto } from './create-solicitacao-bloqueio.dto';

export class UpdateSolicitacaoBloqueioDto extends PartialType(CreateSolicitacaoBloqueioDto) {}
