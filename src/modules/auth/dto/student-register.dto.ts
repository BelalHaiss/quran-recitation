import { IsEmail, IsString, Length } from 'class-validator';

export class studentRigsterDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @Length(8)
  password: string;
}

export class studentLoginDto {
  @IsString()
  usernameOrEmail: string;

  @Length(8)
  password: string;
}
