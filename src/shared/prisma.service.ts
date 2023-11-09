import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { UserConcated } from './types/user.types';

@Injectable()
export class PrismaService extends PrismaClient {
  // Exclude keys from user
  excludeFields<T, K extends keyof T = keyof T>(obj: T, keys: K[]): any {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !keys.includes(key as K)),
    );
  }

  concatUser<T>(user: User & T): UserConcated<T> {
    return user;
  }
}
