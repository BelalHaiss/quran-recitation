import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { AdminLoginDto, AdminRigsterDto } from '../auth/dto/admin.auth.dto';
import * as argon2 from 'argon2';
import { Manager } from '@prisma/client';
import { PrismaService } from 'src/shared/prisma.service';
import { QuranValidator } from 'src/modules/quran/quran.service';

@Injectable()
export class AdminService {
  constructor(
    private readonly prismaService: PrismaService,
    private quranValidator: QuranValidator,
  ) {}

  async createAdmin(adminData: AdminRigsterDto) {
    const hash = await argon2.hash(adminData.password);
    adminData.password = hash;
    await this.prismaService.manager.create({
      data: { ...adminData, created_at: new Date() },
    });
  }

  async adminPasswordLogin(adminLogin: AdminLoginDto) {
    const manager = await this.prismaService.manager.findUniqueOrThrow({
      where: {
        email: adminLogin.email,
      },
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
