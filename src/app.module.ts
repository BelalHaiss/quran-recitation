import { Module } from '@nestjs/common';
import { StudentsModule } from './modules/students/students.module';
import { ConfigModule } from '@nestjs/config';
import { She5Module } from './modules/she5/she5.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleGuard } from './guards/Role.guard';
import { QuranLessonModule } from './modules/lesson/quran_lesson/quran_lesson.module';
import { StorageModule } from './modules/storage/storage.module';
import { CacheModuleModule } from './shared/cache-module/cache-module.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    AuthModule,
    StudentsModule,
    She5Module,
    AdminModule,
    CategoryModule,
    QuranLessonModule,
    StorageModule,
    CacheModuleModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ],
})
export class AppModule {}
