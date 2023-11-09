import { User } from '@prisma/client';

export type Jwt_Payload = {
  sub: string;
  userType: Role;
};

export enum Role {
  Student = 'student',
  Manger = 'manager',
  She5 = 'she5',
}

export type UserConcated<T, K extends keyof T = keyof T> = User & {
  [key in K]: T[K];
};
