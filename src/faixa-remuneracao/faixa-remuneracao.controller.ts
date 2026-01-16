import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaixaRemuneracaoService } from './faixa-remuneracao.service';
import { CreateFaixaRemuneracaoDto } from './dto/create-faixa-remuneracao.dto';
import { UpdateFaixaRemuneracaoDto } from './dto/update-faixa-remuneracao.dto';

@Controller('faixa-remuneracao')
export class FaixaRemuneracaoController {
  constructor(private readonly faixaRemuneracaoService: FaixaRemuneracaoService) {}

  @Post()
  create(@Body() createFaixaRemuneracaoDto: CreateFaixaRemuneracaoDto) {
    return this.faixaRemuneracaoService.create(createFaixaRemuneracaoDto);
  }

  @Get()
  findAll() {
    return this.faixaRemuneracaoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.faixaRemuneracaoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFaixaRemuneracaoDto: UpdateFaixaRemuneracaoDto) {
    return this.faixaRemuneracaoService.update(+id, updateFaixaRemuneracaoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.faixaRemuneracaoService.remove(+id);
  }
}
