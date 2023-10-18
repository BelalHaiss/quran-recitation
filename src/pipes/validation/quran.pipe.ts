import {
  ArgumentMetadata,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Surah_Info } from '../../shared/types/quran';

import { PipeTransform } from '@nestjs/common';
import { CacheService } from 'src/shared/cache-module/cache-module.service';
import { QuranLesson } from '@prisma/client';
import { CacheKeys } from 'src/shared/types/redisKeys.types';

@Injectable()
export class QuranValidatorPipe implements PipeTransform {
  constructor(private cacheService: CacheService) {}

  async transform(value: QuranLesson, metadata: ArgumentMetadata) {
    if (metadata.type !== 'body') return value; // custom interceptor for multer
    const { surah_id, ayah_from, ayah_to } = await value;

    const verses = [ayah_from, ayah_to];
    if (surah_id < 0 || surah_id > 113)
      throw new ForbiddenException('surahid must be 0 : 113 ');
    console.log(surah_id, typeof surah_id, 'surah id ');
    const currentSurah: Surah_Info = await this.cacheService.getItem(
      'lIndex',
      CacheKeys.SURAHS_INFO_LIST,
      surah_id,
    );

    console.log({ currentSurah }, currentSurah.versesCount);
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
