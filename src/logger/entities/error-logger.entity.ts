import { HttpException, HttpStatus } from '@nestjs/common';
import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Model, Schema as MongooseSchema } from 'mongoose';
import { ErrorTypes } from 'src/app.interfaces';
import { IErrorLogger } from './error-loger.interface';

@Schema({
  timestamps: true,
  collection: 'errorlogs',
  statics: {
    async createErrorLogger(errorLogger: ErrorLogger): Promise<any> {
      try {
        return this.create(errorLogger);
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
    },
  },
})
export class ErrorLogger implements IErrorLogger {
  @Prop({ required: true, default: 'unknownMessage' })
  message: string;

  @Prop({ required: true, default: 'unknownError' })
  errorType: ErrorTypes;

  @Prop({ required: true, type: MongooseSchema.Types.Mixed })
  error: any;

  @Prop({ required: true })
  owner: string;
}

export type ErrorLoggerDocument = HydratedDocument<ErrorLogger>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ErrorLoggerModel extends Model<ErrorLoggerDocument> {
  createErrorLogger(errorLogger: ErrorLogger): Promise<ErrorLoggerDocument>;
}

export const ErrorLoggerSchema = SchemaFactory.createForClass(ErrorLogger);
