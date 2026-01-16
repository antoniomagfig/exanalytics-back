import { Module } from '@nestjs/common';
import { DicaCalculadoraService } from './dica-calculadora.service';
import { DicaCalculadoraController } from './dica-calculadora.controller';

@Module({
  controllers: [DicaCalculadoraController],
  providers: [DicaCalculadoraService],
})
export class DicaCalculadoraModule {}
