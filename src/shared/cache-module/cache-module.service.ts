import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { surahs_info_seed } from './util/cache-seed.util';
import { RedisStore } from 'cache-manager-redis-yet';

@Injectable()
export class CacheModuleService implements OnModuleInit {
  constructor(@Inject(CACHE_MANAGER) private cacheManger: Cache<RedisStore>) {}
  async onModuleInit() {
    surahs_info_seed().forEach(async (val) => {
      await this.cacheManger.store.client.rPush(
        'surahs_info',
        JSON.stringify(val),
      );
    });
  }
}
