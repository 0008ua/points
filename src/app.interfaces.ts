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
