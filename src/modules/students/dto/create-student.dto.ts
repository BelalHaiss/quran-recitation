import { Gender, Student } from '@prisma/client';
import { UserConcated } from 'src/shared/types/user.types';
import { OmitSameType } from 'src/shared/types/util.types';

type StudentUser = OmitSameType<
  UserConcated<Student>,
  'user_id' | 'password' | 'created_at' | 'updated_at' | 'user_type'
>;

export class StudentResDTO implements StudentUser {
  email: string = undefined;
  gender: Gender = undefined;
  student_id: number = undefined;
  name: string = undefined;
  birthday: Date = undefined;
  phone: string = undefined;

  constructor(studentData: StudentResDTO) {
    const keys = Object.keys(this);
    keys.forEach((key) => {
      this[key] = studentData[key];
    });
  }
}
