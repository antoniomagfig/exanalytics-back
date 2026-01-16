import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoAberturaDto } from './dto/create-solicitacao-abertura.dto';
import { UpdateSolicitacaoAberturaDto } from './dto/update-solicitacao-abertura.dto';

@Injectable()
export class SolicitacaoAberturaService {
  create(createSolicitacaoAberturaDto: CreateSolicitacaoAberturaDto) {
    return 'This action adds a new solicitacaoAbertura';
  }

  findAll() {
    return `This action returns all solicitacaoAbertura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitacaoAbertura`;
  }

  update(id: number, updateSolicitacaoAberturaDto: UpdateSolicitacaoAberturaDto) {
    return `This action updates a #${id} solicitacaoAbertura`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitacaoAbertura`;
  }
}
