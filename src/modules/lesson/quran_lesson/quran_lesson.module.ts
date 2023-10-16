import { Module } from '@nestjs/common';
import { QuranLessonService } from './quran_lesson.service';
import { QuranLessonController } from './quran_lesson.controller';
import { StorageModule } from 'src/modules/storage/storage.module';
import { PrismaService } from 'src/shared/prisma.service';

@Module({
  imports: [StorageModule],
  controllers: [QuranLessonController],
  providers: [QuranLessonService, PrismaService],
})
export class QuranLessonModule {}
