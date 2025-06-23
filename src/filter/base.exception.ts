import { HttpException } from '@nestjs/common';
import { IBaseException } from 'lib/interfaces/exception.interface';

export class BaseException extends HttpException implements IBaseException {
  constructor(statusCode: number, errorCode: string, message: string) {
    super(errorCode, statusCode);
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.message = message;
  }

  statusCode: number;
  path: string;
  timestamp: string;
  errorCode: string;
  message: string;
}
