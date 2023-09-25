import { Module } from '@nestjs/common';
import { She5Service } from './she5.service';
import { She5Controller } from './she5.controller';

@Module({
  controllers: [She5Controller],
  providers: [She5Service]
})
export class She5Module {}
