import { HttpStatus, Injectable } from '@nestjs/common';
import { AdminRigsterDto } from '../auth/dto/admin.auth.dto';
import * as argon2 from 'argon2';
import { Manager, Prisma } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';
import { CustomException } from 'src/exceptions/CustomException';
import { UserConcated } from 'src/shared/types/user.types';
import { UserLoginDto } from '../auth/dto/user.dto';

@Injectable()
export class AdminRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createAdmin(adminData: AdminRigsterDto) {
    const hash = await argon2.hash(adminData.password);
    adminData.password = hash;

    await this.prismaService.user.create({
      data: {
        ...adminData,
        user_type: 'ADMIN',
        manager: {
          create: {
            role: adminData.role,
          },
        },
      },
    });
  }

  async adminPasswordLogin(adminLogin: UserLoginDto) {
    const managerIncluded: Prisma.UserInclude = { manager: true };
    const user = await this.prismaService.user.findUniqueOrThrow({
      where: {
        email: adminLogin.email,
        user_type: 'ADMIN',
      },
      include: managerIncluded,
    });

    const manager: UserConcated<Manager> = { ...user.manager, ...user };

    return manager;
  }
}
