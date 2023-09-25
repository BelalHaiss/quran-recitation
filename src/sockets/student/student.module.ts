import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentGateway } from './student.gateway';

@Module({
  providers: [StudentGateway, StudentService]
})
export class StudentModule {}
