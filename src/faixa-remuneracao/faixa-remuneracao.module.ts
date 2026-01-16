import { Module } from '@nestjs/common';
import { FaixaRemuneracaoService } from './faixa-remuneracao.service';
import { FaixaRemuneracaoController } from './faixa-remuneracao.controller';

@Module({
  controllers: [FaixaRemuneracaoController],
  providers: [FaixaRemuneracaoService],
})
export class FaixaRemuneracaoModule {}
