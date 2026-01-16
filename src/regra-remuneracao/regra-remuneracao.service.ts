import { Injectable } from '@nestjs/common';
import { CreateRegraRemuneracaoDto } from './dto/create-regra-remuneracao.dto';
import { UpdateRegraRemuneracaoDto } from './dto/update-regra-remuneracao.dto';

@Injectable()
export class RegraRemuneracaoService {
  create(createRegraRemuneracaoDto: CreateRegraRemuneracaoDto) {
    return 'This action adds a new regraRemuneracao';
  }

  findAll() {
    return `This action returns all regraRemuneracao`;
  }

  findOne(id: number) {
    return `This action returns a #${id} regraRemuneracao`;
  }

  update(id: number, updateRegraRemuneracaoDto: UpdateRegraRemuneracaoDto) {
    return `This action updates a #${id} regraRemuneracao`;
  }

  remove(id: number) {
    return `This action removes a #${id} regraRemuneracao`;
  }
}
