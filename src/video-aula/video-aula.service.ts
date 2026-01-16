import { Injectable } from '@nestjs/common';
import { CreateVideoAulaDto } from './dto/create-video-aula.dto';
import { UpdateVideoAulaDto } from './dto/update-video-aula.dto';

@Injectable()
export class VideoAulaService {
  create(createVideoAulaDto: CreateVideoAulaDto) {
    return 'This action adds a new videoAula';
  }

  findAll() {
    return `This action returns all videoAula`;
  }

  findOne(id: number) {
    return `This action returns a #${id} videoAula`;
  }

  update(id: number, updateVideoAulaDto: UpdateVideoAulaDto) {
    return `This action updates a #${id} videoAula`;
  }

  remove(id: number) {
    return `This action removes a #${id} videoAula`;
  }
}
