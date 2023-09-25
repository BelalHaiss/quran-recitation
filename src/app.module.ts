import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './modules/students/students.module';
import { ConfigModule } from '@nestjs/config';
import { She5Module } from './modules/she5/she5.module';
import { She5Module } from './socket/she5/she5.module';
import { StudentModule } from './socket/student/student.module';
import { MessageModule } from './modules/message/message.module';
import { LessonModule } from './modules/lesson/lesson.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), StudentsModule, She5Module, StudentModule, MessageModule, LessonModule, AdminModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
