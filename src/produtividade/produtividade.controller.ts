import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProdutividadeService } from './produtividade.service';
import { CreateProdutividadeDto } from './dto/create-produtividade.dto';
import { UpdateProdutividadeDto } from './dto/update-produtividade.dto';

@Controller('produtividade')
export class ProdutividadeController {
  constructor(private readonly produtividadeService: ProdutividadeService) {}

  @Post()
  create(@Body() createProdutividadeDto: CreateProdutividadeDto) {
    return this.produtividadeService.create(createProdutividadeDto);
  }

  @Get()
  findAll() {
    return this.produtividadeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtividadeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutividadeDto: UpdateProdutividadeDto) {
    return this.produtividadeService.update(+id, updateProdutividadeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtividadeService.remove(+id);
  }
}
