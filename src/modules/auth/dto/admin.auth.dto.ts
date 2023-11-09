import { ManagerRole } from '@prisma/client';
import { IsEnum } from 'class-validator';
import { UserRegisterDTO } from './user.dto';

export class AdminRigsterDto extends UserRegisterDTO {
  @IsEnum(ManagerRole)
  role: ManagerRole;
}
