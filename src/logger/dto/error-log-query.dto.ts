import { ErrorType, ErrorTypes, Owner } from 'src/app.interfaces';

export class ErrorLogQueryDto implements Partial<ErrorType>, Partial<Owner> {
  owner?: string;
  errorType?: ErrorTypes;
  skip?: number;
  limit?: number;
}
