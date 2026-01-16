import { Injectable } from '@nestjs/common';
import { CreateDicaCalculadoraDto } from './dto/create-dica-calculadora.dto';
import { UpdateDicaCalculadoraDto } from './dto/update-dica-calculadora.dto';

@Injectable()
export class DicaCalculadoraService {
  create(createDicaCalculadoraDto: CreateDicaCalculadoraDto) {
    return 'This action adds a new dicaCalculadora';
  }

  findAll() {
    return `This action returns all dicaCalculadora`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dicaCalculadora`;
  }

  update(id: number, updateDicaCalculadoraDto: UpdateDicaCalculadoraDto) {
    return `This action updates a #${id} dicaCalculadora`;
  }

  remove(id: number) {
    return `This action removes a #${id} dicaCalculadora`;
  }
}
