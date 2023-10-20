import { Global, Module } from '@nestjs/common';
import { CacheService } from './cache-module.service';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import type { RedisClientOptions } from 'redis';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    CacheModule.registerAsync<RedisClientOptions>({
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        socket: {
          host: configService.get<string>('REDIS_HOST'),
          port: +configService.get<string>('REDIS_PORT'),
        },
        ttl: undefined, //disable expiration
      }),
      inject: [ConfigService],
    }),
  ],

  providers: [CacheService],
  exports: [CacheService],
})
export class CacheModuleModule {}
