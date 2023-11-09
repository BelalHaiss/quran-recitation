import { Gender, She5 } from '@prisma/client';
import { UserConcated } from 'src/shared/types/user.types';
import { OmitSameType } from 'src/shared/types/util.types';

type She5User = OmitSameType<
  UserConcated<She5>,
  'user_id' | 'password' | 'created_at' | 'updated_at' | 'user_type'
>;

export class She5ResDTO implements She5User {
  email: string = undefined;
  gender: Gender = undefined;
  she5_id: number = undefined;
  name: string = undefined;
  birthday: Date = undefined;
  constructor(she5Data: She5ResDTO) {
    const keys = Object.keys(this);
    keys.forEach((key) => {
      this[key] = she5Data[key];
    });
  }
}
