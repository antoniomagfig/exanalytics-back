import { Injectable } from '@nestjs/common';
import { CreateProdutividadeDto } from './dto/create-produtividade.dto';
import { UpdateProdutividadeDto } from './dto/update-produtividade.dto';

@Injectable()
export class ProdutividadeService {
  create(createProdutividadeDto: CreateProdutividadeDto) {
    return 'This action adds a new produtividade';
  }

  findAll() {
    return `This action returns all produtividade`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produtividade`;
  }

  update(id: number, updateProdutividadeDto: UpdateProdutividadeDto) {
    return `This action updates a #${id} produtividade`;
  }

  remove(id: number) {
    return `This action removes a #${id} produtividade`;
  }
}
