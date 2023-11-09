import { ManagerRole } from '@prisma/client';
import { AdminRigsterDto } from '../dto/admin.auth.dto';

export const seedAdmin: AdminRigsterDto = {
  email: 'admin@gmail.com',
  name: 'admin',
  password: 'admin-admin',
  role: ManagerRole.ADMIN,
  birthday: new Date('2023-7-12'),
  gender: 'MALE',
  phone: '2012312312',
};
