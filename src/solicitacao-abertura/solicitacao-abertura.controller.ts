import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitacaoAberturaService } from './solicitacao-abertura.service';
import { CreateSolicitacaoAberturaDto } from './dto/create-solicitacao-abertura.dto';
import { UpdateSolicitacaoAberturaDto } from './dto/update-solicitacao-abertura.dto';

@Controller('solicitacao-abertura')
export class SolicitacaoAberturaController {
  constructor(private readonly solicitacaoAberturaService: SolicitacaoAberturaService) {}

  @Post()
  create(@Body() createSolicitacaoAberturaDto: CreateSolicitacaoAberturaDto) {
    return this.solicitacaoAberturaService.create(createSolicitacaoAberturaDto);
  }

  @Get()
  findAll() {
    return this.solicitacaoAberturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitacaoAberturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitacaoAberturaDto: UpdateSolicitacaoAberturaDto) {
    return this.solicitacaoAberturaService.update(+id, updateSolicitacaoAberturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacaoAberturaService.remove(+id);
  }
}
