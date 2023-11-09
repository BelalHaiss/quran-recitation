import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { PrismaService } from 'src/shared/prisma.service';
import { StudentRepository } from './student.repository';

@Module({
  controllers: [StudentsController],
  providers: [StudentsService, PrismaService, StudentRepository],
  exports: [StudentsService],
})
export class StudentsModule {}
