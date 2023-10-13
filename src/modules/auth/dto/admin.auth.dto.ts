import { ManagerRole } from '@prisma/client';
import { IsEmail, IsEnum, IsString, Length } from 'class-validator';

export class AdminRigsterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Length(8)
  password: string;

  @IsEnum(ManagerRole)
  role: ManagerRole;
}

export class AdminLoginDto {
  @IsEmail()
  email: string;

  @Length(8)
  password: string;
}
