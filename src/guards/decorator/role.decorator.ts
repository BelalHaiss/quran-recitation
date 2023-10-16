import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/shared/types/user.types';

export const IS_PUBLIC_KEY = 'isPublic';
export const Roles = (roles: Role[]) => SetMetadata('roles', roles);
