import { Gender, User } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDate, IsEmail, IsEnum, IsString, Length } from 'class-validator';

export class UserRegisterDTO implements Partial<User> {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Type(() => Date)
  @IsDate()
  bithday: Date;

  @IsEnum(Gender)
  gender: Gender;

  @Length(8)
  password: string;
}

export class UserLoginDto {
  @IsEmail()
  email: string;

  @Length(8)
  password: string;
}
