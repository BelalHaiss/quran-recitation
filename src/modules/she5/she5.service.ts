import { Injectable } from '@nestjs/common';
import { CreateShe5Dto } from './dto/create-she5.dto';
import { UpdateShe5Dto } from './dto/update-she5.dto';

@Injectable()
export class She5Service {
  create(createShe5Dto: CreateShe5Dto) {
    return 'This action adds a new she5';
  }

  findAll() {
    return `This action returns all she5`;
  }

  findOne(id: number) {
    return `This action returns a #${id} she5`;
  }

  update(id: number, updateShe5Dto: UpdateShe5Dto) {
    return `This action updates a #${id} she5`;
  }

  remove(id: number) {
    return `This action removes a #${id} she5`;
  }
}
