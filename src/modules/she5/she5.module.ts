import { Module } from '@nestjs/common';
import { She5Service } from './she5.service';
import { She5Controller } from './she5.controller';
import { PrismaService } from 'src/shared/prisma.service';
import { She5Repository } from './She5.repository';

@Module({
  controllers: [She5Controller],
  providers: [She5Service, PrismaService, She5Repository],
  exports: [She5Service],
})
export class She5Module {}
