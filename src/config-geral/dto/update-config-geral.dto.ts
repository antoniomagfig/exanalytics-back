import { PartialType } from '@nestjs/mapped-types';
import { CreateConfigGeralDto } from './create-config-geral.dto';

export class UpdateConfigGeralDto extends PartialType(CreateConfigGeralDto) {}
