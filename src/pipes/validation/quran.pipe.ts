import {
  ArgumentMetadata,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Surah_Info } from '../../shared/types/quran';

import { PipeTransform } from '@nestjs/common';
import { CacheService } from 'src/shared/cache-module/cache-module.service';
import { QuranLesson } from '@prisma/client';

@Injectable()
export class QuranValidatorPipe implements PipeTransform {
  constructor(private cacheService: CacheService) {}

  async transform(value: QuranLesson, metadata: ArgumentMetadata) {
    if (metadata.type !== 'body') return value; // custom interceptor for multer
    const { surah_id, ayah_from, ayah_to } = await value;

    const verses = [ayah_from, ayah_to];
    if (surah_id < 0 || surah_id > 113)
      throw new ForbiddenException('surahid must be 0 : 113 ');

    const currentSurah: Surah_Info = await this.cacheService.getItem(
      'lIndex',
      'surahs_info',
      surah_id.toString(),
    );

    const maxVersesCount = currentSurah.versesCount;

    if (
      ayah_from > ayah_to ||
      ayah_from === ayah_to ||
      verses.includes(0) ||
      verses.some((ayah) => ayah > maxVersesCount)
    )
      throw new ForbiddenException('verse numbers are wrong');

    return value;
  }
}
