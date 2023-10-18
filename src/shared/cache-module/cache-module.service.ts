import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { surahs_info_seed } from './util/cache-seed.util';
import { RedisStore } from 'cache-manager-redis-yet';
import { RedisClientType } from 'redis';
import { CacheKeys } from '../types/redisKeys.types';

@Injectable()
export class CacheService implements OnModuleInit {
  constructor(@Inject(CACHE_MANAGER) private cacheManger: Cache<RedisStore>) {}
  async onModuleInit() {
    const surahsLength: number = await this.getItem(
      'lLen',
      CacheKeys.SURAHS_INFO_LIST,
    );

    if (surahsLength === 0) this.seeds();
  }
  private seeds() {
    surahs_info_seed().forEach(async (val) => {
      await this.setItem(
        'rPush',
        CacheKeys.SURAHS_INFO_LIST,
        JSON.stringify(val),
      );
    });
  }

  async setItem(setMethod: keyof RedisClientType, key: CacheKeys, value: any) {
    await this.cacheManger.store.client[setMethod as string](key, value);
  }

  async getItem(
    getMethod: keyof RedisClientType,
    key: CacheKeys,
    args?: number, // can be index
  ): Promise<any> {
    let val: any;
    if (args)
      val = await this.cacheManger.store.client[getMethod as string](key, args);
    else val = await this.cacheManger.store.client[getMethod as string](key);

    return JSON.parse(val);
  }
}
