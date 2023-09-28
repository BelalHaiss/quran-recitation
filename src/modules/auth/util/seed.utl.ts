import { AdminRigsterDto, Admin_Role } from '../dto/admin.auth.dto';

export const seedAdmin: AdminRigsterDto = {
  email: 'admin@gmail.com',
  name: 'admin',
  password: 'admin',
  role: Admin_Role.ADMIN,
  username: 'admin',
};
