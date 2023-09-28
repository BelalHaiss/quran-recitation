import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AdminLoginDto, AdminRigsterDto } from '../auth/dto/admin.auth.dto';
import * as argon2 from 'argon2';
import { Manager } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { usernameOrEmailField } from '../auth/util/auth.utl';
import { PrismaService } from 'src/shared/prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAdmin(adminData: AdminRigsterDto) {
    try {
      const hash = await argon2.hash(adminData.password);
      adminData.password = hash;
      await this.prismaService.manager.create({
        data: { ...adminData, created_at: new Date() },
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

  async adminPasswordLogin(adminLogin: AdminLoginDto) {
    const manager = await this.prismaService.manager.findUniqueOrThrow({
      where: usernameOrEmailField(adminLogin.usernameOrEmail),
    });
    const isPasswordMatch = await argon2.verify(
      manager.password,
      adminLogin.password,
    );
    if (!isPasswordMatch)
      throw new HttpException('password incorrect', HttpStatus.UNAUTHORIZED);
    const managerEntity: Omit<
      Manager,
      'password' | 'created_at' | 'updated_at'
    > = this.prismaService.excludeFields<Manager>(manager, [
      'password',
      'created_at',
      'updated_at',
    ]);
    return managerEntity;
  }
}
