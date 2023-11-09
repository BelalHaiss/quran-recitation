import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminRigsterDto } from './dto/admin.auth.dto';
import { Role } from 'src/shared/types/user.types';
import { Roles } from 'src/guards/decorator/role.decorator';
import { Public } from 'src/guards/decorator/public.decorator';
import { UserLoginDto, UserRegisterDTO } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Roles([Role.Manger])
  @Post('admin/register')
  adminRegister(@Body() admin: AdminRigsterDto) {
    return this.authService.registerAdmin(admin);
  }

  @Public()
  @Post('admin/login')
  adminLogin(@Body() adminData: UserLoginDto) {
    return this.authService.adminLogin(adminData);
  }

  @Roles([Role.Manger])
  @Post('she5/register')
  she5Register(@Body() she5: UserRegisterDTO) {
    return this.authService.registerShe5(she5);
  }

  @Public()
  @Post('she5/login')
  she5Login(@Body() she5: UserLoginDto) {
    return this.authService.she5Login(she5);
  }

  @Public()
  @Post('student/register')
  studentRegister(@Body() student: UserRegisterDTO) {
    return this.authService.registerStudent(student);
  }

  @Public()
  @Post('student/login')
  studentLogin(@Body() student: UserLoginDto) {
    return this.authService.studentLogin(student);
  }
}
