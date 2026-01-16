import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegraRemuneracaoService } from './regra-remuneracao.service';
import { CreateRegraRemuneracaoDto } from './dto/create-regra-remuneracao.dto';
import { UpdateRegraRemuneracaoDto } from './dto/update-regra-remuneracao.dto';

@Controller('regra-remuneracao')
export class RegraRemuneracaoController {
  constructor(private readonly regraRemuneracaoService: RegraRemuneracaoService) {}

  @Post()
  create(@Body() createRegraRemuneracaoDto: CreateRegraRemuneracaoDto) {
    return this.regraRemuneracaoService.create(createRegraRemuneracaoDto);
  }

  @Get()
  findAll() {
    return this.regraRemuneracaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.regraRemuneracaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegraRemuneracaoDto: UpdateRegraRemuneracaoDto) {
    return this.regraRemuneracaoService.update(+id, updateRegraRemuneracaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.regraRemuneracaoService.remove(+id);
  }
}
