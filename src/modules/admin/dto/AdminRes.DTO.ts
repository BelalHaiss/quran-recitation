import { $Enums, Manager, ManagerRole } from '@prisma/client';
import { UserConcated } from 'src/shared/types/user.types';
import { OmitSameType } from 'src/shared/types/util.types';

type MangerUser = OmitSameType<
  UserConcated<Manager>,
  'user_id' | 'password' | 'created_at' | 'updated_at' | 'user_type'
>;

export class AdminResDTO implements MangerUser {
  email: string;
  gender: $Enums.Gender;
  manager_id: number;
  role: ManagerRole;
  name: string;
  bithday: Date;
  constructor(adminData: MangerUser) {
    const keys = Object.keys(this);
    Object.fromEntries(
      Object.entries(adminData).filter(([dataKey]) => keys.includes(dataKey)),
    );
  }
}
