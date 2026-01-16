import { PartialType } from '@nestjs/mapped-types';
import { CreateVideoAulaDto } from './create-video-aula.dto';

export class UpdateVideoAulaDto extends PartialType(CreateVideoAulaDto) {}
