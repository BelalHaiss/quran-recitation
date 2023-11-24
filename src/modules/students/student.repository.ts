import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { Prisma, Student } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';
import { UserConcated } from 'src/shared/types/user.types';
import { UserLoginDto, UserRegisterDTO } from '../auth/dto/user.dto';

@Injectable()
export class StudentRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createStudent(studentData: UserRegisterDTO) {
    const hash = await argon2.hash(studentData.password);
    studentData.password = hash;

    await this.prismaService.user.create({
      data: {
        ...studentData,
        user_type: 'STUDENT',
        student: {
          create: {
            student_id: undefined,
          },
        },
      },
    });
  }

  async studentPasswordLogin(studentLogin: UserLoginDto) {
    const studentIncluded: Prisma.UserInclude = { student: true };
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: {
        email: studentLogin.email,
        user_type: 'STUDENT',
      },
      include: studentIncluded,
    });

    const student: UserConcated<Student> = { ...user.student, ...user };

    return student;
  }
}
