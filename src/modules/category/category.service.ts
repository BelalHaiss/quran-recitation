import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  create(categoryDto: CreateCategoryDto) {
    return this.prisma.category.create({
      data: categoryDto,
    });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: number) {
    return this.prisma.category.findUniqueOrThrow({
      where: {
        category_id: id,
      },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.prisma.category.update({
      where: {
        category_id: id,
      },
      data: updateCategoryDto,
    });
  }
}
