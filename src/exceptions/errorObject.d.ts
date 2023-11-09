import { HttpStatus } from '@nestjs/common';

interface ErrorObject {
  timestamp: number;
  statusCode: HttpStatus;
  errorType: string;
  message: string;
}

type ErroObjectArgs = Partial<ErrorObject> & Pick<ErrorObject, 'message'>;
