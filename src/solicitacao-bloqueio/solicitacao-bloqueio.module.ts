import { Module } from '@nestjs/common';
import { SolicitacaoBloqueioService } from './solicitacao-bloqueio.service';
import { SolicitacaoBloqueioController } from './solicitacao-bloqueio.controller';

@Module({
  controllers: [SolicitacaoBloqueioController],
  providers: [SolicitacaoBloqueioService],
})
export class SolicitacaoBloqueioModule {}
