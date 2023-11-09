import { Gender, She5 } from '@prisma/client';
import { UserConcated } from 'src/shared/types/user.types';
import { OmitSameType } from 'src/shared/types/util.types';

type She5User = OmitSameType<
  UserConcated<She5>,
  'user_id' | 'password' | 'created_at' | 'updated_at' | 'user_type'
>;

export class She5ResDTO implements She5User {
  email: string;
  gender: Gender;
  she5_id: number;
  name: string;
  bithday: Date;
  constructor(she5Data: She5ResDTO) {
    const keys = Object.keys(this);
    Object.fromEntries(
      Object.entries(she5Data).filter(([dataKey]) => keys.includes(dataKey)),
    );
  }
}
