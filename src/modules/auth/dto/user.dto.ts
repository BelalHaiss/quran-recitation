import { Gender, User } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  MaxDate,
  MinDate,
} from 'class-validator';

export class UserRegisterDTO implements Partial<User> {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Type(() => Date)
  @IsDate()
  @MinDate(new Date('1930'))
  @MaxDate(new Date('2020'))
  birthday: Date;

  @IsOptional()
  @IsNumberString()
  phone: string;

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
