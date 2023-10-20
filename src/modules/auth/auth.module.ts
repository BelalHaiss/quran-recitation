import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AdminModule } from '../admin/admin.module';
import { StudentsModule } from '../students/students.module';
import { She5Module } from '../she5/she5.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => {
        return {
          global: true,
          secret: config.getOrThrow('JWT_SECRET'),
          verifyOptions: {
            ignoreExpiration: true,
          },
        };
      },
      inject: [ConfigService],
    }),
    AdminModule,
    StudentsModule,
    She5Module,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtService],
  exports: [JwtService],
})
export class AuthModule {}
