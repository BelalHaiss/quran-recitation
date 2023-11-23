import { Injectable } from '@nestjs/common';
import { QuranLesson } from '@prisma/client';
import { CacheService } from 'src/shared/cache-module/cache-module.service';
import { Surah_Info } from 'src/shared/types/quran';

@Injectable()
export class QuranUtilService {
  constructor(private cacheService: CacheService) {}

  async getJuzFromSurah(
    surah: Pick<QuranLesson, 'surah_id' | 'ayah_from' | 'ayah_to'>,
  ) {
    const { surah_id, ayah_from } = surah;
    const surahInfo: Surah_Info = await this.cacheService.getItem(
      'lIndex',
      'surahs_info',
      surah_id.toString(),
    );
    if (!surahInfo.juz_points) return surahInfo.juz[0]; // this mean surah found on one juz only
    return surahInfo.juz_points.find((point) => point.starting >= ayah_from)
      .starting;
  }
}
