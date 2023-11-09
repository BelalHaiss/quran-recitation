import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ErrorObject } from './errorObject';
import { CustomException } from './CustomException';
import { Response } from 'express';

@Catch(HttpException)
export class CustomHttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse();

    const errorBdoy: ErrorObject = {
      message: JSON.stringify(exception.getResponse()),
      statusCode: exception.getStatus(),
      errorType: exception.message,
      timestamp: Date.now(),
    };
    response.status(errorBdoy.statusCode).json(errorBdoy);
  }
}

@Catch(CustomException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: CustomException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    response.status(exception.statusCode).json(exception);
  }
}

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();
    const target = exception.meta?.target;
    const message = target // when unique constrain happend
      ? `This ${target} already exists`
      : exception.name;
    const resBody: ErrorObject = new CustomException({
      message,
      status: HttpStatus.CONFLICT,
    });
    response.status(resBody.statusCode).json({ resBody });
  }
}

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();

    console.log('unhandeld error', exception);
    response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: 'Internal server error' });
  }
}
