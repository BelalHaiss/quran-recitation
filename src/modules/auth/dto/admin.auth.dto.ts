import { IsEmail, IsEnum, IsString, Length } from 'class-validator';

export enum Admin_Role {
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR',
}

export class AdminRigsterDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @Length(8)
  password: string;

  @IsEnum(Admin_Role)
  role: Admin_Role;
}

export class AdminLoginDto {
  @IsString()
  usernameOrEmail: string;

  @Length(8)
  password: string;
}
