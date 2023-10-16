import { PartialType } from '@nestjs/mapped-types';
import { CreateQuranLessonDto } from './create-quran_lesson.dto';

export class UpdateQuranLessonDto extends PartialType(CreateQuranLessonDto) {}
