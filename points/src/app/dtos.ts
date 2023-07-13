import { ErrorType, Owner, ErrorTypes, ErrorBody, ErrorMessage, OwnerData } from './interfaces';

export class ErrorLogQueryDto implements Partial<ErrorType>, Partial<Owner> {
  owner: string | null;
  errorType: ErrorTypes | null;
  skip?: number;
  limit?: number;
}

export class ErrorLogCreateDto implements ErrorBody, ErrorMessage, ErrorType {
  message: string;
  errorType: ErrorTypes;
  error: any;
}

export class ErrorLoggerDocumentDto implements ErrorBody, ErrorType, Owner, ErrorMessage {
  message: string;
  errorType: ErrorTypes;
  error: any;
  owner: string;
  _id: string;
  createdAt: string;
}

export class OwnerDataDto {
  data: OwnerData[];
  totalDocuments: number;
}

export class OwnerQueryDto {
  name?: string;
  skip?: number;
  limit?: number;
}
