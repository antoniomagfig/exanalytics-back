import { Injectable } from '@nestjs/common';
import { CreateFaixaRemuneracaoDto } from './dto/create-faixa-remuneracao.dto';
import { UpdateFaixaRemuneracaoDto } from './dto/update-faixa-remuneracao.dto';

@Injectable()
export class FaixaRemuneracaoService {
  create(createFaixaRemuneracaoDto: CreateFaixaRemuneracaoDto) {
    return 'This action adds a new faixaRemuneracao';
  }

  findAll() {
    return `This action returns all faixaRemuneracao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} faixaRemuneracao`;
  }

  update(id: number, updateFaixaRemuneracaoDto: UpdateFaixaRemuneracaoDto) {
    return `This action updates a #${id} faixaRemuneracao`;
  }

  remove(id: number) {
    return `This action removes a #${id} faixaRemuneracao`;
  }
}
