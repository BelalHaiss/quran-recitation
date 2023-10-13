import { IsEmail, IsString, Length } from 'class-validator';

export class studentRigsterDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @Length(8)
  password: string;
}

export class studentLoginDto {
  @IsEmail()
  email: string;

  @Length(8)
  password: string;
}
