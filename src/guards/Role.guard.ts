import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { IS_PUBLIC_KEY } from './decorator/public.decorator';
import { Jwt_Payload, Role } from 'src/shared/types/user.types';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
    private reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    const isPublic = this.reflector.getAllAndOverride(IS_PUBLIC_KEY, [
      context.getClass(),
      context.getHandler(),
    ]);

    if (isPublic) return true;
    if (!token) {
      throw new UnauthorizedException();
    }
    const roles: Role[] = this.reflector.getAllAndOverride('roles', [
      context.getClass(),
      context.getHandler(),
    ]);

    try {
      const secret = this.configService.get('JWT_SECRET');
      const payload: Jwt_Payload = await this.jwtService.verifyAsync(token, {
        secret,
      });

      if (!roles.includes(payload.userType)) throw new UnauthorizedException();

      request['user'] = payload;
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
