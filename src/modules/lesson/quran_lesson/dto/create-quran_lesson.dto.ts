import { QuranLesson } from '@prisma/client';
import { IsNumber, IsString, IsUrl } from 'class-validator';
import { OmitDateFields } from 'src/shared/types/util.types';
import { Type } from 'class-transformer';
import { BadRequestException } from '@nestjs/common';
export class CreateQuranLessonDto
  implements
    OmitDateFields<
      QuranLesson,
      'audio_url' | 'lesson_id' | 'pdf_url' | 'category_id'
    >
{
  @Type(() => Number)
  @IsNumber()
  surah_id: number;

  @Type(() => Number)
  @IsNumber()
  ayah_from: number;

  @Type(() => Number)
  @IsNumber()
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
  audio: Express.Multer.File[],
  pdf: Express.Multer.File[],
) => {
  if (!audio || !pdf)
    throw new BadRequestException('make sure to have pdf + audio files');
  if (!audio[0].mimetype.includes('audio') || !pdf[0].mimetype.includes('/pdf'))
    throw new BadRequestException('invalid file type  ');
};
