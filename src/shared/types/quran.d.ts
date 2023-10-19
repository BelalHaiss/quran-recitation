import { QuranLesson } from '@prisma/client';

export type Surah_Info = {
  name: {
    en: string;
    ar: string;
  };
  versesCount: number;
};

// use for naming convension when saving files to cloud storage
export type Lesson_Info = Pick<
  QuranLesson,
  'ayah_from' | 'ayah_to' | 'surah_id'
>;
