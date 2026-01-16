import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoBloqueioDto } from './dto/create-solicitacao-bloqueio.dto';
import { UpdateSolicitacaoBloqueioDto } from './dto/update-solicitacao-bloqueio.dto';

@Injectable()
export class SolicitacaoBloqueioService {
  create(createSolicitacaoBloqueioDto: CreateSolicitacaoBloqueioDto) {
    return 'This action adds a new solicitacaoBloqueio';
  }

  findAll() {
    return `This action returns all solicitacaoBloqueio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitacaoBloqueio`;
  }

  update(id: number, updateSolicitacaoBloqueioDto: UpdateSolicitacaoBloqueioDto) {
    return `This action updates a #${id} solicitacaoBloqueio`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitacaoBloqueio`;
  }
}
