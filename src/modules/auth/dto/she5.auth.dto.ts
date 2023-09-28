import { IsEmail, IsString, Length } from 'class-validator';

export class She5RigsterDto {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @Length(8)
  password: string;
}

export class She5LoginDto {
  @IsString()
  usernameOrEmail: string;

  @Length(8)
  password: string;
}
