import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch()
export class globalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    if (!exception.status) {
      if (exception instanceof PrismaClientKnownRequestError) {
        const target = exception.meta?.target;
        const message = target
          ? `This ${target} already exists`
          : exception.name;
        response.status(HttpStatus.CONFLICT).json({ message });
        console.log('Prisma error', exception);
      } else {
        console.log('unhandeld error', exception);
        response
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: 'Internal server error' });
      }
    } else {
      response.status(exception.status).json(exception.response);
    }
  }
}
