import { ManagerRole } from '@prisma/client';
import { AdminRigsterDto } from '../dto/admin.auth.dto';

export const seedAdmin: AdminRigsterDto = {
  email: 'admin@gmail.com',
  name: 'admin',
  password: 'admin-admin',
  role: ManagerRole.ADMIN,
};
