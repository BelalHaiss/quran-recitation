import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { She5Service } from './she5.service';
import { CreateShe5Dto } from './dto/create-she5.dto';
import { UpdateShe5Dto } from './dto/update-she5.dto';

@Controller('she5')
export class She5Controller {
  constructor(private readonly she5Service: She5Service) {}

  @Post()
  create(@Body() createShe5Dto: CreateShe5Dto) {
    return this.she5Service.create(createShe5Dto);
  }

  @Get()
  findAll() {
    return this.she5Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.she5Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShe5Dto: UpdateShe5Dto) {
    return this.she5Service.update(+id, updateShe5Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.she5Service.remove(+id);
  }
}
