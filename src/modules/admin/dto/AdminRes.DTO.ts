import { $Enums, Manager, ManagerRole } from '@prisma/client';
import { UserConcated } from 'src/shared/types/user.types';
import { OmitSameType } from 'src/shared/types/util.types';

type MangerUser = OmitSameType<
  UserConcated<Manager>,
  'user_id' | 'password' | 'created_at' | 'updated_at' | 'user_type'
>;

export class AdminResDTO implements MangerUser {
  email: string = undefined;
  gender: $Enums.Gender = undefined;
  manager_id: number = undefined;
  role: ManagerRole = undefined;
  name: string = undefined;
  birthday: Date = undefined;

  constructor(adminData: MangerUser) {
    const keys = Object.keys(this);
    keys.forEach((key) => {
      this[key] = adminData[key];
    });
  }
}
