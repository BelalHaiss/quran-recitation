import { HttpStatus, Injectable } from '@nestjs/common';
import { AdminRigsterDto } from '../auth/dto/admin.auth.dto';
import * as argon2 from 'argon2';
import { UserLoginDto } from '../auth/dto/user.dto';
import { AdminRepository } from './admin.repository';
import { AdminResDTO } from './dto/AdminRes.DTO';
import { CustomException } from 'src/exceptions/CustomException';

@Injectable()
export class AdminService {
  constructor(private readonly adminRepoistory: AdminRepository) {}

  async createAdmin(adminData: AdminRigsterDto) {
    return this.adminRepoistory.createAdmin(adminData);
  }

  async adminPasswordLogin(adminLogin: UserLoginDto) {
    const manager = await this.adminRepoistory.adminPasswordLogin(adminLogin);
    const isPasswordMatch = await argon2.verify(
      manager.password,
      adminLogin.password,
    );
    if (!isPasswordMatch)
      throw new CustomException({
        errorType: 'invalid credintals ',
        message: 'password incorrect',
        status: HttpStatus.UNAUTHORIZED,
      });
    return manager;
  }
}
