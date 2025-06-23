import { ValidationPipeOptions } from '@nestjs/common';
import { ValidationFailException } from 'filter/common.exception';

// 값 검사에 대한 파이프라인 설정
export const validationPipeConfig: ValidationPipeOptions = {
  dismissDefaultMessages: true,
  exceptionFactory: () => new ValidationFailException(), // 기본 에러메시지 무시하고 커스텀 메시지로 변경
  whitelist: true, // 검사하지 않은 모든 값 제거
  transform: true, // 검사 끝난 객체를 클래스로 변환
  skipMissingProperties: true, // null과 undefined 무시
};
