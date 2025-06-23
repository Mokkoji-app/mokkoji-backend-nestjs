import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { BaseException } from './base.exception';
import { NotFoundException, UnCatchedException } from './common.exception';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private readonly logger: Logger = new Logger(HttpExceptionFilter.name)) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const res = ctx.getResponse();

    // 응답할 에러 객체 생성
    const result =
      exception instanceof BaseException
        ? exception
        : exception instanceof HttpException && exception.getStatus() === 404
          ? new NotFoundException()
          : new UnCatchedException();

    result.timestamp = new Date().toISOString();
    result.path = `${req.method} ${req.url}`;

    if (result.statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(exception);
    } else if (result.statusCode >= HttpStatus.BAD_REQUEST) {
      this.logger.warn(exception);
    }

    res.status(result.statusCode).json({
      statusCode: result.statusCode,
      path: result.path,
      timestamp: result.timestamp,
      errorCode: result.errorCode,
      message: result.message,
    });
  }
}
