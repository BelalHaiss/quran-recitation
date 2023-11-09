import { HttpStatus, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { UserLoginDto, UserRegisterDTO } from '../auth/dto/user.dto';
import { StudentRepository } from './student.repository';
import { CustomException } from 'src/exceptions/CustomException';
import { StudentResDTO } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async createStudent(studentData: UserRegisterDTO) {
    return this.studentRepository.createStudent(studentData);
  }

  async studentPasswordLogin(studentDto: UserLoginDto) {
    const student = await this.studentRepository.studentPasswordLogin(
      studentDto,
    );
    const isPasswordMatch = await argon2.verify(
      student.password,
      studentDto.password,
    );
    if (!isPasswordMatch)
      throw new CustomException({
        errorType: 'invalid credintals ',
        message: 'password incorrect',
        status: HttpStatus.UNAUTHORIZED,
      });

    return new StudentResDTO(student);
  }
}
