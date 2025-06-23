export enum CommonExceptionCodeEnum {
  NotFound = 'NOT_FOUND',
  DatabaseError = 'DATABASE_ERROR',
  ValidationFail = 'VALIDATION_FAIL',
  Uncatched = 'UNCATCHED',
}

export const commonExceptionMessage: Record<CommonExceptionCodeEnum, string> = {
  [CommonExceptionCodeEnum.NotFound]: 'URL을 찾을 수 없습니다.',
  [CommonExceptionCodeEnum.ValidationFail]: '입력한 내용이 유효하지 않습니다.',
  [CommonExceptionCodeEnum.DatabaseError]: 'DB에서 에러가 발생하였습니다.',
  [CommonExceptionCodeEnum.Uncatched]: '서버에서 에러가 발생하였습니다.',
};

export enum AuthExceptionCodeEnum {
  EmailDuplicate = 'AUTH00',
  CodeSendFail = 'AUTH01',
  VerificationFail = 'AUTH02',
  LoginFail = 'AUTH03',
  NotLogin = 'AUTH04',
  NoPermission = 'AUTH05',
}

export const authExceptionMessage: Record<AuthExceptionCodeEnum, string> = {
  [AuthExceptionCodeEnum.EmailDuplicate]: '이미 등록된 이메일입니다.',
  [AuthExceptionCodeEnum.CodeSendFail]: '인증 코드 발송에 실패했습니다.',
  [AuthExceptionCodeEnum.VerificationFail]: '인증 코드가 일치하지 않습니다.',
  [AuthExceptionCodeEnum.LoginFail]: '로그인에 실패했습니다.',
  [AuthExceptionCodeEnum.NotLogin]: '로그인이 필요합니다.',
  [AuthExceptionCodeEnum.NoPermission]: '권한이 없습니다.',
};
