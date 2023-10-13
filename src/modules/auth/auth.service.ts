import { Injectable, OnModuleInit } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { She5Service } from '../she5/she5.service';
import { StudentsService } from '../students/students.service';
import { AdminLoginDto, AdminRigsterDto } from './dto/admin.auth.dto';
import { JwtService } from '@nestjs/jwt';
import { She5LoginDto, She5RigsterDto } from './dto/she5.auth.dto';
import { seedAdmin } from './util/seed.utl';
import { studentLoginDto, studentRigsterDto } from './dto/student-register.dto';
import { UsersTypes } from 'src/shared/types/user.types';

@Injectable()
export class AuthService implements OnModuleInit {
  constructor(
    private adminService: AdminService,
    private she5Service: She5Service,
    private studentService: StudentsService,
    private jwtService: JwtService,
  ) {}

  async onModuleInit() {
    try {
      await this.registerAdmin(seedAdmin);
    } catch (error) {
      return;
    }
  }
  async generateAcessToken(userId: number, userType: UsersTypes) {
    const payload = { sub: userId, userType };
    const token = await this.jwtService.signAsync(payload);
    return token;
  }

  // admin rigster
  async registerAdmin(adminDto: AdminRigsterDto) {
    return this.adminService.createAdmin(adminDto);
  }
  // admin login
  async adminLogin(adminDto: AdminLoginDto) {
    const manger = await this.adminService.adminPasswordLogin(adminDto);
    const access_token = await this.generateAcessToken(
      manger.manger_id,
      'manager',
    );
    return { access_token, manger };
  }

  // she5 register
  async registerShe5(she5Dto: She5RigsterDto) {
    return this.she5Service.createShe5(she5Dto);
  }
  // she5 login
  async she5Login(she5Dto: She5LoginDto) {
    const she5 = await this.she5Service.she5Login(she5Dto);
    const access_token = await this.generateAcessToken(she5.she5_id, 'she5');
    return { access_token, she5 };
  }

  // student register
  async registerStudent(studentDto: studentRigsterDto) {
    return this.studentService.createStudent(studentDto);
  }
  // student login
  async studentLogin(studentDto: studentLoginDto) {
    const student = await this.studentService.studentPasswordLogin(studentDto);
    const access_token = await this.generateAcessToken(
      student.student_id,
      'student',
    );
    return { access_token, student };
  }
}
