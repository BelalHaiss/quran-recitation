import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { RedisStore } from 'cache-manager-redis-yet';
import { RedisClientType } from 'redis';
import { CacheKeys } from './redisKeys.types';

@Injectable()
export class CacheService {
  constructor(@Inject(CACHE_MANAGER) private cacheManger: Cache<RedisStore>) {}

  async setItem(
    setMethod: keyof RedisClientType,
    key: keyof CacheKeys,
    value: any,
  ) {
    await this.cacheManger.store.client[setMethod as string](key, value);
  }

  async getItem(
    getMethod: keyof RedisClientType,
    key: keyof CacheKeys,
    args?: string, // can be index
  ): Promise<any> {
    let val: any;

    if (args)
      val = await this.cacheManger.store.client[getMethod as string](key, args);
    else val = await this.cacheManger.store.client[getMethod as string](key);
    return JSON.parse(val);
  }
}
