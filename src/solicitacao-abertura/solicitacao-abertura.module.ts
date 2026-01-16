import { Module } from '@nestjs/common';
import { SolicitacaoAberturaService } from './solicitacao-abertura.service';
import { SolicitacaoAberturaController } from './solicitacao-abertura.controller';

@Module({
  controllers: [SolicitacaoAberturaController],
  providers: [SolicitacaoAberturaService],
})
export class SolicitacaoAberturaModule {}
