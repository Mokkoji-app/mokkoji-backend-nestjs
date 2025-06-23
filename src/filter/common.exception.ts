import { HttpStatus } from '@nestjs/common';
import { BaseException } from './base.exception';
import { CommonExceptionCodeEnum, commonExceptionMessage } from 'lib/enum/exception.enum';

export class NotFoundException extends BaseException {
  constructor() {
    super(
      HttpStatus.NOT_FOUND,
      CommonExceptionCodeEnum.NotFound,
      commonExceptionMessage[CommonExceptionCodeEnum.NotFound],
    );
  }
}

export class ValidationFailException extends BaseException {
  constructor() {
    super(
      HttpStatus.BAD_REQUEST,
      CommonExceptionCodeEnum.ValidationFail,
      commonExceptionMessage[CommonExceptionCodeEnum.ValidationFail],
    );
  }
}

export class DatabaseErrorException extends BaseException {
  constructor() {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      CommonExceptionCodeEnum.DatabaseError,
      commonExceptionMessage[CommonExceptionCodeEnum.DatabaseError],
    );
  }
}

export class UnCatchedException extends BaseException {
  constructor() {
    super(
      HttpStatus.INTERNAL_SERVER_ERROR,
      CommonExceptionCodeEnum.Uncatched,
      commonExceptionMessage[CommonExceptionCodeEnum.Uncatched],
    );
  }
}
