import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma, QuranLesson } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';
import { Lesson_Info } from 'src/shared/types/quran';
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
      Pick<QuranLesson, 'audio_url' | 'pdf_url' | 'category_id'>,
  ) {
    const isValid = await this.validateBeforeCreate(quranLesson);
    if (!isValid)
      throw new ForbiddenException('verses and surah validation faild');
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
    return this.QuranModel.findMany({
      where: {
        surah_id,
      },
    });
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

  private async validateBeforeCreate(newLessonInfo: Lesson_Info) {
    const { surah_id, ayah_from } = newLessonInfo;
    // find by surah id && ayah from  or ayah_to
    const result = await this.prismaService.$queryRaw<[{ 1: bigint }]>`
        SELECT 1
        FROM quran_lesson
        WHERE 
        surah_id = ${surah_id} AND ayah_to + 1 = ${ayah_from} 
        OR  ( NOT EXISTS(SELECT 1 from quran_lesson WHERE surah_id = ${surah_id}) AND ${ayah_from} = 1 ) 
        LIMIT 1
        `;
    return result.length > 0;
  }

  //   deleteOne
  async removeById(lesson_id: number) {
    return this.QuranModel.delete({
      where: {
        lesson_id,
      },
    });
  }
}
