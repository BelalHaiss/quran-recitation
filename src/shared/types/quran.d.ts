import { CategoryType, QuranLesson } from '@prisma/client';

export type Surah_Info = {
  name: {
    en: string;
    ar: string;
  };
  versesCount: number;
  juz: { index: number; starting: number; ending: number };
};

// use for naming convension when saving files to cloud storage
export type Lesson_Info = Pick<
  QuranLesson,
  'ayah_from' | 'ayah_to' | 'surah_id'
>;

type User_Quran_Memorized = {
  surah: [];
  juz: [];
};

type User_Lesson_tracker = {
  lessonType: CategoryType;
  lesson_id: number;
  isDone: boolean;
}[];
