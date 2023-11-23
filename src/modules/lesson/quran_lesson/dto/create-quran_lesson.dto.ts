import { QuranLesson } from '@prisma/client';
import { IsInt, IsString, IsUrl } from 'class-validator';
import { OmitDateFields } from 'src/shared/types/util.types';
import { Type } from 'class-transformer';
import { BadRequestException } from '@nestjs/common';
import { Quran_Lesson_Files } from 'src/shared/types/files.types';
export class CreateQuranLessonDto
  implements
    OmitDateFields<
      QuranLesson,
      'audio_url' | 'lesson_id' | 'pdf_url' | 'juz_id'
    >
{
  @IsString()
  label: string;

  @Type(() => Number)
  @IsInt()
  surah_id: number;

  @Type(() => Number)
  @IsInt()
  ayah_from: number;

  @Type(() => Number)
  @IsInt()
  ayah_to: number;

  @IsUrl()
  video_url: string;

  @IsString()
  description: string;

  // files
  //          audio: any;
  //          pdf: any;
}

export const files_validation = (
  files: Quran_Lesson_Files,
  isUpdate?: boolean,
) => {
  const { audio, pdf } = files;
  if (!isUpdate && (!audio || !pdf)) {
    throw new BadRequestException('make sure to have pdf + audio files');
  }

  Object.keys(files).forEach((key: keyof Quran_Lesson_Files) => {
    validateType(files[key][0], key.toString() as 'pdf' | 'audio');
  });
};
const validateType = (file: Express.Multer.File, type: 'pdf' | 'audio') => {
  if (!file.mimetype.includes(type))
    throw new BadRequestException('invalid file type  ');
};
