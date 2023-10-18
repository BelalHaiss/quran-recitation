import { Injectable } from '@nestjs/common';
import { CreateQuranLessonDto } from './dto/create-quran_lesson.dto';
import { UpdateQuranLessonDto } from './dto/update-quran_lesson.dto';
import { StorageService } from 'src/modules/storage/storage.service';
import { PrismaService } from 'src/shared/prisma.service';
import { Quran_Lesson_Files } from 'src/shared/types/files.types';
import { QuranLesson } from '@prisma/client';

@Injectable()
export class QuranLessonService {
  constructor(
    private storageService: StorageService,
    private prismaService: PrismaService,
  ) {}
  async create(
    createQuranLessonDto: CreateQuranLessonDto,
    files: Quran_Lesson_Files,
  ) {
    const { audio_url, pdf_url } = await this.handleFiles(files);

    return this.prismaService.quranLesson.create({
      data: {
        ...createQuranLessonDto,
        category_id: 1,
        audio_url,
        pdf_url,
      },
    });
  }
  private async handleFiles(files: Quran_Lesson_Files) {
    const { audio, pdf } = files;
    let uploadedFiles: { audio_url?: string; pdf_url?: string };
    if (audio) {
      uploadedFiles.audio_url = await this.storageService.uploadFile(
        audio[0],
        'audio',
      );
    }
    if (pdf) {
      uploadedFiles.pdf_url = await this.storageService.uploadFile(
        pdf[0],
        'pdf',
      );
    }

    return uploadedFiles;
  }
  findOne(id: number) {
    return this.prismaService.quranLesson.findUniqueOrThrow({
      where: {
        lesson_id: id,
      },
    });
  }

  async update(
    id: number,
    updateQuranLessonDto: UpdateQuranLessonDto,
    files: Quran_Lesson_Files,
  ) {
    const { audio_url, pdf_url } = await this.handleFiles(files);
    const updatedFields: Partial<QuranLesson> = updateQuranLessonDto;
    if (audio_url) updatedFields.audio_url = audio_url;
    if (pdf_url) updatedFields.pdf_url = pdf_url;
    return this.prismaService.quranLesson.update({
      where: {
        lesson_id: id,
      },
      data: updatedFields,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} quranLesson`;
  }
}
