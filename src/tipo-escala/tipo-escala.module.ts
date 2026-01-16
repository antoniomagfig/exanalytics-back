import { Module } from '@nestjs/common';
import { TipoEscalaService } from './tipo-escala.service';
import { TipoEscalaController } from './tipo-escala.controller';

@Module({
  controllers: [TipoEscalaController],
  providers: [TipoEscalaService],
})
export class TipoEscalaModule {}
