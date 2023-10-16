import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/students/students.module';
import { ConfigModule } from '@nestjs/config';
import { She5Module } from './modules/she5/she5.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { QuranModule } from './modules/quran/quran.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './guards/Role.guard';
import { QuranLessonModule } from './modules/lesson/quran_lesson/quran_lesson.module';
import { StorageModule } from './modules/storage/storage.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    StudentsModule,
    She5Module,
    AdminModule,
    AuthModule,
    CategoryModule,
    QuranModule,
    QuranLessonModule,
    StorageModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
