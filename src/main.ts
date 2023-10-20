import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { globalExceptionFilter } from './exceptions/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      // skipMissingProperties: false,
      // disableErrorMessages: true,
    }),
  );

  app.useGlobalFilters(new globalExceptionFilter());
  app.setGlobalPrefix('/v1/api');
  await app.listen(5000);
}
bootstrap();
