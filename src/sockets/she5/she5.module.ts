import { Module } from '@nestjs/common';
import { She5Service } from './she5.service';
import { She5Gateway } from './she5.gateway';

@Module({
  providers: [She5Gateway, She5Service],
})
export class She5Module {}
