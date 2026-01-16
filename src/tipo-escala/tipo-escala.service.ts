import { Injectable } from '@nestjs/common';
import { CreateTipoEscalaDto } from './dto/create-tipo-escala.dto';
import { UpdateTipoEscalaDto } from './dto/update-tipo-escala.dto';

@Injectable()
export class TipoEscalaService {
  create(createTipoEscalaDto: CreateTipoEscalaDto) {
    return 'This action adds a new tipoEscala';
  }

  findAll() {
    return `This action returns all tipoEscala`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoEscala`;
  }

  update(id: number, updateTipoEscalaDto: UpdateTipoEscalaDto) {
    return `This action updates a #${id} tipoEscala`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoEscala`;
  }
}
