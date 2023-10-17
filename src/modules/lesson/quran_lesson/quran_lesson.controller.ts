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

@Controller('quran-lesson')
export class QuranLessonController {
  constructor(private readonly quranLessonService: QuranLessonService) {}
  @Roles([Role.Manger])
  @Post()
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
    files: {
      audio: Express.Multer.File[];
      pdf: Express.Multer.File[];
    },
  ) {
    const { audio, pdf } = files;

    files_validation(audio, pdf);
    // upload files get url
    return this.quranLessonService.create(
      createQuranLessonDto,
      audio[0],
      pdf[0],
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quranLessonService.findOne(+id);
  }

  @Roles([Role.Manger])
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
    files: {
      audio: Express.Multer.File[];
      pdf: Express.Multer.File[];
    },
  ) {
    return this.quranLessonService.update(+id, updateQuranLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quranLessonService.remove(+id);
  }
}
