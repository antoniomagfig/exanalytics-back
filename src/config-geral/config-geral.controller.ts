import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ConfigGeralService } from './config-geral.service';
import { CreateConfigGeralDto } from './dto/create-config-geral.dto';
import { UpdateConfigGeralDto } from './dto/update-config-geral.dto';

@Controller('config-geral')
export class ConfigGeralController {
  constructor(private readonly configGeralService: ConfigGeralService) {}

  @Post()
  create(@Body() createConfigGeralDto: CreateConfigGeralDto) {
    return this.configGeralService.create(createConfigGeralDto);
  }

  @Get()
  findAll() {
    return this.configGeralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.configGeralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateConfigGeralDto: UpdateConfigGeralDto) {
    return this.configGeralService.update(+id, updateConfigGeralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.configGeralService.remove(+id);
  }
}
