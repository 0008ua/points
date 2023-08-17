import { type } from 'os';
import { environment } from './app.environment';

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

export type ErrorTypes = typeof errors[number];

export interface ErrorBody {
  error: any;
}

export interface ErrorType {
  errorType: ErrorTypes;
}

export interface Owner {
  owner: string;
}

export interface OwnerData {
  owner: string;
  name: string;
}

export interface ErrorMessage {
  message: string;
}

export type UID = string;

export enum UserRoles {
  Member = 'member',
  Guest = 'guest',
  Admin = 'admin',
}

export type Colors = 'red' | 'green' | 'blue' | 'black' | 'yellow';
export const gameTypes = ['rummy', 'uno', 'thousand', 'train'] as const;
export type GameType = typeof gameTypes[number];
