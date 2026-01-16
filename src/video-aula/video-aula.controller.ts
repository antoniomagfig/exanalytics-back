import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoAulaService } from './video-aula.service';
import { CreateVideoAulaDto } from './dto/create-video-aula.dto';
import { UpdateVideoAulaDto } from './dto/update-video-aula.dto';

@Controller('video-aula')
export class VideoAulaController {
  constructor(private readonly videoAulaService: VideoAulaService) {}

  @Post()
  create(@Body() createVideoAulaDto: CreateVideoAulaDto) {
    return this.videoAulaService.create(createVideoAulaDto);
  }

  @Get()
  findAll() {
    return this.videoAulaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoAulaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoAulaDto: UpdateVideoAulaDto) {
    return this.videoAulaService.update(+id, updateVideoAulaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoAulaService.remove(+id);
  }
}
