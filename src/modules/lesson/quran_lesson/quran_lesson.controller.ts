import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  UsePipes,
} from '@nestjs/common';
import { QuranLessonService } from './quran_lesson.service';
import {
  CreateQuranLessonDto,
  files_validation,
} from './dto/create-quran_lesson.dto';
import { UpdateQuranLessonDto } from './dto/update-quran_lesson.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/guards/decorator/public.decorator';
import { Roles } from 'src/guards/decorator/role.decorator';
import { Role } from 'src/shared/types/user.types';
import { QuranValidatorPipe } from 'src/pipes/validation/quran.pipe';
import { Quran_Lesson_Files } from 'src/shared/types/files.types';

@Controller('quran-lesson')
export class QuranLessonController {
  constructor(private readonly quranLessonService: QuranLessonService) {}
  @Roles([Role.Manger])
  @Post()
  @UsePipes(QuranValidatorPipe)
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'audio', maxCount: 1 },
        { name: 'pdf', maxCount: 1 },
      ],
      {
        limits: {
          files: 2,
          fileSize: 10 * 1024 * 1024,
        },
      },
    ),
  )
  create(
    @Body() createQuranLessonDto: CreateQuranLessonDto,
    @UploadedFiles()
    files: Quran_Lesson_Files,
  ) {
    files_validation(files);
    // upload files get url
    return this.quranLessonService.create(createQuranLessonDto, files);
  }

  @Public()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quranLessonService.findOne(+id);
  }

  @Roles([Role.Manger])
  @UsePipes(QuranValidatorPipe)
  @Patch(':id')
  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'audio', maxCount: 1 },
        { name: 'pdf', maxCount: 1 },
      ],
      {
        limits: {
          files: 2,
          fileSize: 10 * 1024 * 1024,
        },
      },
    ),
  )
  update(
    @Param('id') id: string,
    @Body() updateQuranLessonDto: UpdateQuranLessonDto,
    @UploadedFiles()
    files: Quran_Lesson_Files,
  ) {
    files_validation(files, true);
    return this.quranLessonService.update(+id, updateQuranLessonDto, files);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quranLessonService.remove(+id);
  }
}
