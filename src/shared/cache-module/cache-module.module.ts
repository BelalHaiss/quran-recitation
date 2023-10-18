import { Global, Module } from '@nestjs/common';
import { CacheService } from './cache-module.service';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import type { RedisClientOptions } from 'redis';

@Global()
@Module({
  imports: [
    CacheModule.register<RedisClientOptions>({
      store: redisStore,
      socket: {
        port: 6397,
      },
      ttl: undefined, //disable expiration
    }),
  ],

  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModuleModule {}
