import { Module } from '@nestjs/common';
import { RegraRemuneracaoService } from './regra-remuneracao.service';
import { RegraRemuneracaoController } from './regra-remuneracao.controller';

@Module({
  controllers: [RegraRemuneracaoController],
  providers: [RegraRemuneracaoService],
})
export class RegraRemuneracaoModule {}
