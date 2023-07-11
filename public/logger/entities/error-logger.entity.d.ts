/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { HydratedDocument, Model, Schema as MongooseSchema } from 'mongoose';
import { ErrorTypes } from 'src/app.interfaces';
import { IErrorLogger } from './error-loger.interface';
export declare class ErrorLogger implements IErrorLogger {
    message: string;
    errorType: ErrorTypes;
    error: any;
    owner: string;
}
export type ErrorLoggerDocument = HydratedDocument<ErrorLogger>;
export interface ErrorLoggerModel extends Model<ErrorLoggerDocument> {
    createErrorLogger(errorLogger: ErrorLogger): Promise<ErrorLoggerDocument>;
}
export declare const ErrorLoggerSchema: MongooseSchema<ErrorLogger, Model<ErrorLogger, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ErrorLogger>;
