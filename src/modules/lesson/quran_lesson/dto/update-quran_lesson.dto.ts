import { PartialType } from '@nestjs/mapped-types';
import { CreateQuranLessonDto } from './create-quran_lesson.dto';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateQuranLessonDto extends PartialType(CreateQuranLessonDto) {
  @Type(() => Number)
  @IsInt()
  surah_id: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  ayah_from: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  ayah_to: number;

  @IsOptional()
  @IsUrl()
  video_url: string;

  @IsOptional()
  @IsString()
  description: string;

  // files
  //          audio: any;
  //          pdf: any;
}
