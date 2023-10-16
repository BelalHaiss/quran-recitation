import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminLoginDto, AdminRigsterDto } from './dto/admin.auth.dto';
import { She5LoginDto, She5RigsterDto } from './dto/she5.auth.dto';
import { studentLoginDto, studentRigsterDto } from './dto/student-register.dto';
import { RoleGuard } from 'src/guards/Role.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(RoleGuard)
  @Post('admin/register')
  adminRegister(@Body() admin: AdminRigsterDto) {
    return this.authService.registerAdmin(admin);
  }

  @Post('admin/login')
  adminLogin(@Body() adminData: AdminLoginDto) {
    return this.authService.adminLogin(adminData);
  }

  @UseGuards(RoleGuard)
  @Post('she5/register')
  she5Register(@Body() she5: She5RigsterDto) {
    return this.authService.registerShe5(she5);
  }

  @Post('she5/login')
  she5Login(@Body() she5: She5LoginDto) {
    return this.authService.she5Login(she5);
  }

  @Post('student/register')
  studentRegister(@Body() student: studentRigsterDto) {
    return this.authService.registerStudent(student);
  }

  @Post('student/login')
  studentLogin(@Body() student: studentLoginDto) {
    return this.authService.studentLogin(student);
  }
}
