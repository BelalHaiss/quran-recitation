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

@Controller('quran-lesson')
export class QuranLessonController {
  constructor(private readonly quranLessonService: QuranLessonService) {}

  @Public()
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

  @Get()
  findAll() {
    return this.quranLessonService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quranLessonService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuranLessonDto: UpdateQuranLessonDto,
  ) {
    return this.quranLessonService.update(+id, updateQuranLessonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quranLessonService.remove(+id);
  }
}
