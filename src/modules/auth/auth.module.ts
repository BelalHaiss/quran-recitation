import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from '../admin/admin.module';
import { StudentsModule } from '../students/students.module';
import { She5Module } from '../she5/she5.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      verifyOptions: {
        ignoreExpiration: true,
      },
    }),
    AdminModule,
    StudentsModule,
    She5Module,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
