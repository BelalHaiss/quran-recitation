import { Injectable } from '@nestjs/common';
import * as argon2 from 'argon2';
import { Prisma, She5 } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';
import { UserConcated } from 'src/shared/types/user.types';
import { UserLoginDto, UserRegisterDTO } from '../auth/dto/user.dto';

@Injectable()
export class She5Repository {
  constructor(private readonly prismaService: PrismaService) {}

  async createShe5(she5Data: UserRegisterDTO) {
    const hash = await argon2.hash(she5Data.password);
    she5Data.password = hash;

    await this.prismaService.user.create({
      data: {
        ...she5Data,
        user_type: 'SHE5',
        she5: {
          create: {
            she5_id: undefined,
          },
        },
      },
    });
  }

  async she5PasswordLogin(she5Login: UserLoginDto) {
    const she5Included: Prisma.UserInclude = { she5: true };
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: {
        email: she5Login.email,
        user_type: 'SHE5',
      },
      include: she5Included,
    });

    const she5: UserConcated<She5> = { ...user.she5, ...user };

    return she5;
  }
}
