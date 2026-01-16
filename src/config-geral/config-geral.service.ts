import { Injectable } from '@nestjs/common';
import { CreateConfigGeralDto } from './dto/create-config-geral.dto';
import { UpdateConfigGeralDto } from './dto/update-config-geral.dto';

@Injectable()
export class ConfigGeralService {
  create(createConfigGeralDto: CreateConfigGeralDto) {
    return 'This action adds a new configGeral';
  }

  findAll() {
    return `This action returns all configGeral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} configGeral`;
  }

  update(id: number, updateConfigGeralDto: UpdateConfigGeralDto) {
    return `This action updates a #${id} configGeral`;
  }

  remove(id: number) {
    return `This action removes a #${id} configGeral`;
  }
}
