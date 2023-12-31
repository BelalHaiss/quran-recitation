import { Injectable } from '@nestjs/common';
import { Prisma, QuranLesson } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';
import { CreateQuranLessonDto } from './dto/create-quran_lesson.dto';
import { UpdateQuranLessonDto } from './dto/update-quran_lesson.dto';

@Injectable()
export class QuranRepository {
  private QuranModel: Prisma.QuranLessonDelegate;
  constructor(private prismaService: PrismaService) {
    this.QuranModel = prismaService.quranLesson;
  }

  //create new one
  async create(
    quranLesson: CreateQuranLessonDto &
      Pick<QuranLesson, 'audio_url' | 'pdf_url' | 'juz_id'>,
  ) {
    return this.QuranModel.create({
      data: quranLesson,
    });
  }
  // update by Id

  async updateById(lesson_id: number, quranLesson: UpdateQuranLessonDto) {
    return this.QuranModel.update({
      where: {
        lesson_id,
      },
      data: quranLesson,
    });
  }

  // findManyBySurahId

  async findLessonsBySurahId(surah_id: number) {
    const surahs = await this.prismaService.$queryRaw`
    SELECT lesson_id ,juz_id , label,ayah_to,ayah_from 

    FROM quran_lesson 

    WHERE surah_id= ${surah_id}

    ORDER BY ayah_from
  
    `;

    return surahs;
  }

  // FindByID
  async findById(lesson_id: number) {
    return this.QuranModel.findUniqueOrThrow({
      where: {
        lesson_id,
      },
    });
  }

  //   validateBeforeCreate

  //   deleteOne
  async removeById(lesson_id: number) {
    await this.QuranModel.delete({
      where: {
        lesson_id,
      },
    });
  }
}
