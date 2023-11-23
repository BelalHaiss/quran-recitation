import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class CategoryService implements OnModuleInit {
  constructor(private prisma: PrismaService) {}
  async onModuleInit() {
    const Quran_Memorizing_Category: CreateCategoryDto = {
      label: 'تحفيظ قران',
      category_type: 'MEMORIZING',
      parent_category: 'QURAN',
      image_url: null,
    };
    this.prisma.category
      .create({
        data: { ...Quran_Memorizing_Category, category_id: 1 },
      })
      .catch(() => null); //already seeded
  }
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
