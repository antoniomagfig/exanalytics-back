import { Module } from '@nestjs/common';
import { VideoAulaService } from './video-aula.service';
import { VideoAulaController } from './video-aula.controller';

@Module({
  controllers: [VideoAulaController],
  providers: [VideoAulaService],
})
export class VideoAulaModule {}
