import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { usernameOrEmailField } from '../auth/util/auth.utl';
import {
  studentLoginDto,
  studentRigsterDto,
} from '../auth/dto/student-register.dto';
import { Student } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class StudentsService {
  constructor(private readonly prismaService: PrismaService) {}

  async createStudent(studentData: studentRigsterDto) {
    try {
      const hash = await argon2.hash(studentData.password);
      studentData.password = hash;
      await this.prismaService.manager.create({
        data: { ...studentData, created_at: new Date() },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new HttpException(
            `this ${error.meta!.target} alread exists`,
            HttpStatus.CONFLICT,
          );
        throw error;
      }
      throw error;
    }
  }

  async studentPasswordLogin(studentDto: studentLoginDto) {
    const student = await this.prismaService.student.findUniqueOrThrow({
      where: usernameOrEmailField(studentDto.usernameOrEmail),
    });
    const isPasswordMatch = await argon2.verify(
      student.password,
      studentDto.password,
    );
    if (!isPasswordMatch)
      throw new HttpException('password incorrect', HttpStatus.UNAUTHORIZED);
    const studentEntity: Omit<
      Student,
      'password' | 'created_at' | 'updated_at'
    > = this.prismaService.excludeFields<Student>(student, [
      'password',
      'created_at',
      'updated_at',
    ]);
    return studentEntity;
  }
}
