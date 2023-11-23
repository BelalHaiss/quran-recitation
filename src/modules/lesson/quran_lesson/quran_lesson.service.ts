import { Injectable } from '@nestjs/common';
import { CreateQuranLessonDto } from './dto/create-quran_lesson.dto';
import { UpdateQuranLessonDto } from './dto/update-quran_lesson.dto';
import { StorageService } from 'src/modules/storage/storage.service';
import { Quran_Lesson_Files } from 'src/shared/types/files.types';
import { QuranLesson } from '@prisma/client';
import { Lesson_Info } from 'src/shared/types/quran';
import { QuranRepository } from './quran_lesson_repository';

@Injectable()
export class QuranLessonService {
  constructor(
    private storageService: StorageService,
    private quranRepository: QuranRepository,
  ) {}
  async create(
    createQuranLessonDto: CreateQuranLessonDto,
    files: Quran_Lesson_Files,
  ) {
    const { audio_url, pdf_url } = await this.handleFiles(
      files,
      createQuranLessonDto,
    );

    return this.quranRepository.create({
      ...createQuranLessonDto,
      audio_url,
      pdf_url,
    });
  }
  private async handleFiles(files: Quran_Lesson_Files, info: Lesson_Info) {
    const { audio, pdf } = files;
    const uploadedFiles = {
      audio_url: '',
      pdf_url: '',
    };
    if (audio) {
      uploadedFiles.audio_url = await this.storageService.uploadFile(
        audio[0],
        'audio',
        info,
      );
    }
    if (pdf) {
      uploadedFiles.pdf_url = await this.storageService.uploadFile(
        pdf[0],
        'pdf',
        info,
      );
    }
    return uploadedFiles;
  }

  async update(
    id: number,
    updateQuranLessonDto: UpdateQuranLessonDto,
    files: Quran_Lesson_Files,
  ) {
    const { audio_url, pdf_url } = await this.handleFiles(
      files,
      updateQuranLessonDto,
    );
    const updatedFields: Partial<QuranLesson> = updateQuranLessonDto;
    if (audio_url) updatedFields.audio_url = audio_url;
    if (pdf_url) updatedFields.pdf_url = pdf_url;
    return this.quranRepository.updateById(id, updateQuranLessonDto);
  }

  findOne(id: number) {
    return this.quranRepository.findById(id);
  }
  async findSurahLessons(id: number) {
    return this.quranRepository.findLessonsBySurahId(id);
  }

  remove(id: number) {
    return this.quranRepository.removeById(id);
  }

  private getJuzFromSurah(
    surah: Pick<QuranLesson, 'surah_id' | 'ayah_from' | 'ayah_to'>,
  ) {
    const { surah_id, ayah_from, ayah_to } = surah;
  }
}
