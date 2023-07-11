import { type } from 'os';
import { environment } from './app.environment';

export type UID = string;

export type GameType = 'rummy' | 'uno' | 'thousand' | 'train';

export type CmdType = keyof typeof environment.en.commands;
export type BtnType = keyof typeof environment.en.buttons;
export type MsgType = keyof typeof environment.en.messages;

export interface NamedScore {
  name: string;
  value: number;
  picture?: string;
  total?: number;
}

// global
const errors = [
  'unknownError',
  'analytics/error',
  'auth/error',
  'app/error',
  'ngrxDataError',
] as const;

// export type ErrorTypes = typeof errors[number];

// export type ErrorTypes = typeof errors[number];
export type ErrorTypes = typeof errors[number];

// global
export interface ErrorBody {
  error: any;
}

// global
export interface ErrorType {
  errorType: ErrorTypes;
}

// global
export interface Owner {
  owner: string;
}

// global
export interface OwnerData {
  owner: string;
  name: string;
}

// global
export interface ErrorMessage {
  message: string;
}
