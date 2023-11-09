import { Injectable, OnModuleInit } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { She5Service } from '../she5/she5.service';
import { StudentsService } from '../students/students.service';
import { AdminRigsterDto } from './dto/admin.auth.dto';
import { JwtService } from '@nestjs/jwt';
import { seedAdmin } from './util/seed.utl';
import { Role } from 'src/shared/types/user.types';
import { ConfigService } from '@nestjs/config';
import { UserLoginDto, UserRegisterDTO } from './dto/user.dto';
import { AdminResDTO } from '../admin/dto/AdminRes.DTO';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    private adminService: AdminService,
    private she5Service: She5Service,
    private studentService: StudentsService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async onModuleInit() {
    try {
      await this.registerAdmin(seedAdmin);
    } catch (error) {
      return;
    }
  }
  async generateAcessToken(userId: number, userType: Role) {
    const payload = { sub: userId, userType };

    const secret = this.configService.getOrThrow('JWT_SECRET');

    const token = await this.jwtService.signAsync(payload, {
      secret,
    });
    return token;
  }

  // admin rigster
  async registerAdmin(adminDto: AdminRigsterDto) {
    return this.adminService.createAdmin(adminDto);
  }
  // admin login
  async adminLogin(adminDto: UserLoginDto) {
    const manager = await this.adminService.adminPasswordLogin(adminDto);

    const access_token = await this.generateAcessToken(
      manager.manager_id as number,
      Role.Manger,
    );
    return { user: new AdminResDTO(manager), access_token };
  }

  // she5 register
  async registerShe5(she5Dto: UserRegisterDTO) {
    return this.she5Service.createShe5(she5Dto);
  }
  // she5 login
  async she5Login(she5Dto: UserLoginDto) {
    const she5 = await this.she5Service.she5Login(she5Dto);
    const access_token = await this.generateAcessToken(she5.she5_id, Role.She5);
    return { access_token, she5 };
  }

  // student register
  async registerStudent(studentDto: UserRegisterDTO) {
    return this.studentService.createStudent(studentDto);
  }
  // student login
  async studentLogin(studentDto: UserLoginDto) {
    const student = await this.studentService.studentPasswordLogin(studentDto);
    const access_token = await this.generateAcessToken(
      student.student_id,
      Role.Student,
    );
    return { access_token, student };
  }
}
