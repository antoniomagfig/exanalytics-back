import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EspecialidadeModule } from './especialidade/especialidade.module';
import { MarcaModule } from './marca/marca.module';
import { UnidadeModule } from './unidade/unidade.module';
import { TipoExameModule } from './tipo-exame/tipo-exame.module';
import { TipoEscalaModule } from './tipo-escala/tipo-escala.module';
import { RegraRemuneracaoModule } from './regra-remuneracao/regra-remuneracao.module';
import { FaixaRemuneracaoModule } from './faixa-remuneracao/faixa-remuneracao.module';
import { ProdutividadeModule } from './produtividade/produtividade.module';
import { SolicitacaoBloqueioModule } from './solicitacao-bloqueio/solicitacao-bloqueio.module';
import { SolicitacaoAberturaModule } from './solicitacao-abertura/solicitacao-abertura.module';
import { VideoAulaModule } from './video-aula/video-aula.module';
import { DicaCalculadoraModule } from './dica-calculadora/dica-calculadora.module';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
import { DashboardMedicoModule } from './dashboard-medico/dashboard-medico.module';
import { ConfigGeralModule } from './config-geral/config-geral.module';

@Module({
  imports: [EspecialidadeModule, MarcaModule, UnidadeModule, TipoExameModule, TipoEscalaModule, RegraRemuneracaoModule, FaixaRemuneracaoModule, ProdutividadeModule, SolicitacaoBloqueioModule, SolicitacaoAberturaModule, VideoAulaModule, DicaCalculadoraModule, DashboardAdminModule, DashboardMedicoModule, ConfigGeralModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
