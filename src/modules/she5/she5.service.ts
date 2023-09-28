import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { She5RigsterDto, She5LoginDto } from '../auth/dto/she5.auth.dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { She5 } from '@prisma/client';
import { usernameOrEmailField } from '../auth/util/auth.utl';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class She5Service {
  constructor(private readonly prismaService: PrismaService) {}

  async createShe5(she5Dto: She5RigsterDto) {
    try {
      const hash = await argon2.hash(she5Dto.password);
      she5Dto.password = hash;
      await this.prismaService.manager.create({
        data: { ...she5Dto, created_at: new Date() },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002')
          throw new HttpException(
            `this ${error.meta!.target} alread exists`,
            HttpStatus.CONFLICT,
          );
        throw error;
      }
      throw error;
    }
  }

  async she5Login(she5Dto: She5LoginDto) {
    const she5 = await this.prismaService.she5.findUniqueOrThrow({
      where: usernameOrEmailField(she5Dto.usernameOrEmail),
    });
    const isPasswordMatch = await argon2.verify(
      she5.password,
      she5Dto.password,
    );
    if (!isPasswordMatch)
      throw new HttpException('password incorrect', HttpStatus.UNAUTHORIZED);
    const she5Entity: Omit<She5, 'password' | 'created_at' | 'updated_at'> =
      this.prismaService.excludeFields<She5>(she5, [
        'password',
        'created_at',
        'updated_at',
      ]);
    return she5Entity;
  }
}
