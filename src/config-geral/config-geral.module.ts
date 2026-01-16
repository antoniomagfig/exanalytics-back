import { Module } from '@nestjs/common';
import { ConfigGeralService } from './config-geral.service';
import { ConfigGeralController } from './config-geral.controller';

@Module({
  controllers: [ConfigGeralController],
  providers: [ConfigGeralService],
})
export class ConfigGeralModule {}
