import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DicaCalculadoraService } from './dica-calculadora.service';
import { CreateDicaCalculadoraDto } from './dto/create-dica-calculadora.dto';
import { UpdateDicaCalculadoraDto } from './dto/update-dica-calculadora.dto';

@Controller('dica-calculadora')
export class DicaCalculadoraController {
  constructor(private readonly dicaCalculadoraService: DicaCalculadoraService) {}

  @Post()
  create(@Body() createDicaCalculadoraDto: CreateDicaCalculadoraDto) {
    return this.dicaCalculadoraService.create(createDicaCalculadoraDto);
  }

  @Get()
  findAll() {
    return this.dicaCalculadoraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dicaCalculadoraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDicaCalculadoraDto: UpdateDicaCalculadoraDto) {
    return this.dicaCalculadoraService.update(+id, updateDicaCalculadoraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dicaCalculadoraService.remove(+id);
  }
}
