import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEscalaService } from './tipo-escala.service';
import { CreateTipoEscalaDto } from './dto/create-tipo-escala.dto';
import { UpdateTipoEscalaDto } from './dto/update-tipo-escala.dto';

@Controller('tipo-escala')
export class TipoEscalaController {
  constructor(private readonly tipoEscalaService: TipoEscalaService) {}

  @Post()
  create(@Body() createTipoEscalaDto: CreateTipoEscalaDto) {
    return this.tipoEscalaService.create(createTipoEscalaDto);
  }

  @Get()
  findAll() {
    return this.tipoEscalaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEscalaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEscalaDto: UpdateTipoEscalaDto) {
    return this.tipoEscalaService.update(+id, updateTipoEscalaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEscalaService.remove(+id);
  }
}
