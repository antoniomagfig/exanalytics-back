import { Module } from '@nestjs/common';
import { ProdutividadeService } from './produtividade.service';
import { ProdutividadeController } from './produtividade.controller';

@Module({
  controllers: [ProdutividadeController],
  providers: [ProdutividadeService],
})
export class ProdutividadeModule {}
