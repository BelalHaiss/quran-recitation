import { Gender, Student } from '@prisma/client';
import { UserConcated } from 'src/shared/types/user.types';
import { OmitSameType } from 'src/shared/types/util.types';

type StudentUser = OmitSameType<
  UserConcated<Student>,
  'user_id' | 'password' | 'created_at' | 'updated_at' | 'user_type'
>;

export class StudentResDTO implements StudentUser {
  email: string;
  gender: Gender;
  student_id: number;
  name: string;
  bithday: Date;
  constructor(studentData: StudentResDTO) {
    const keys = Object.keys(this);
    Object.fromEntries(
      Object.entries(studentData).filter(([dataKey]) => keys.includes(dataKey)),
    );
  }
}
