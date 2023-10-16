import { Injectable } from '@nestjs/common';
import { CreateQuranLessonDto } from './dto/create-quran_lesson.dto';
import { UpdateQuranLessonDto } from './dto/update-quran_lesson.dto';
import { StorageService } from 'src/modules/storage/storage.service';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class QuranLessonService {
  constructor(
    private storageService: StorageService,
    private prismaService: PrismaService,
  ) {}
  async create(
    createQuranLessonDto: CreateQuranLessonDto,
    audio: Express.Multer.File,
    pdf: Express.Multer.File,
  ) {
    const audio_url = await this.storageService.uploadFile(audio, 'audio');
    const pdf_url = await this.storageService.uploadFile(pdf, 'pdf');

    return this.prismaService.quranLesson.create({
      data: {
        ...createQuranLessonDto,
        category_id: 1,
        audio_url,
        pdf_url,
      },
    });
  }

  findAll() {
    return `This action returns all quranLesson`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quranLesson`;
  }

  update(id: number, updateQuranLessonDto: UpdateQuranLessonDto) {
    return `This action updates a #${id} quranLesson`;
  }

  remove(id: number) {
    return `This action removes a #${id} quranLesson`;
  }
}
