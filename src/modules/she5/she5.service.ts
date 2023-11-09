import { HttpStatus, Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { She5Repository } from './She5.repository';
import { UserLoginDto, UserRegisterDTO } from '../auth/dto/user.dto';
import { CustomException } from 'src/exceptions/CustomException';
import { She5ResDTO } from './dto/create-she5.dto';

@Injectable()
export class She5Service {
  constructor(private readonly she5Repoistory: She5Repository) {}

  async createShe5(she5Dto: UserRegisterDTO) {
    return this.she5Repoistory.createShe5(she5Dto);
  }

  async she5Login(she5Dto: UserLoginDto) {
    const she5 = await this.she5Repoistory.she5PasswordLogin(she5Dto);
    const isPasswordMatch = await argon2.verify(
      she5.password,
      she5Dto.password,
    );
    if (!isPasswordMatch)
      throw new CustomException({
        errorType: 'invalid credintals ',
        message: 'password incorrect',
        status: HttpStatus.UNAUTHORIZED,
      });

    return new She5ResDTO(she5);
  }
}
