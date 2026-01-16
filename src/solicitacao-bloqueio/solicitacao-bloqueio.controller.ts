import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SolicitacaoBloqueioService } from './solicitacao-bloqueio.service';
import { CreateSolicitacaoBloqueioDto } from './dto/create-solicitacao-bloqueio.dto';
import { UpdateSolicitacaoBloqueioDto } from './dto/update-solicitacao-bloqueio.dto';

@Controller('solicitacao-bloqueio')
export class SolicitacaoBloqueioController {
  constructor(private readonly solicitacaoBloqueioService: SolicitacaoBloqueioService) {}

  @Post()
  create(@Body() createSolicitacaoBloqueioDto: CreateSolicitacaoBloqueioDto) {
    return this.solicitacaoBloqueioService.create(createSolicitacaoBloqueioDto);
  }

  @Get()
  findAll() {
    return this.solicitacaoBloqueioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.solicitacaoBloqueioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSolicitacaoBloqueioDto: UpdateSolicitacaoBloqueioDto) {
    return this.solicitacaoBloqueioService.update(+id, updateSolicitacaoBloqueioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.solicitacaoBloqueioService.remove(+id);
  }
}
