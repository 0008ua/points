import { HttpStatus } from '@nestjs/common';
type errorConstant = [string, HttpStatus];
export declare const NAME_EXIST: errorConstant;
export declare const USER_NOT_FOUND: errorConstant;
export declare const WRONG_PASSWORD: errorConstant;
export declare const INTERNAL_SERVER_ERROR: errorConstant;
export declare const DB_ERROR: errorConstant;
export declare const WRONG_CODE: errorConstant;
export {};
