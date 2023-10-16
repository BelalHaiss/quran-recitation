import { Global, Module } from '@nestjs/common';
import { QuranValidator } from './quran.service';

@Global()
@Module({
  providers: [QuranValidator],
  exports: [QuranValidator],
})
export class QuranModule {}
