import { environment } from '../environments/environment';

export type UUID = string;
export type RoundMemberUUID = string;

export interface IUser {
  _id?: UID;
  name: string;
  password: string;
  role?: UserRoles;
  createdAt?: string;
  updatedAt?: string;
}

export interface IGamer {
  _id?: UID;
  owner?: UID;
  name: string;
  // uniqueName?: string;
  rating?: any;
  color: Colors;
  telegramCheckCode: string;
  telegramSubscriptionName: string;
  // telegramIds?: string[];
  // createdAt?: string;
  // updatedAt?: string;
}

export type IGamerTotal = IGamer & { totalScore: number };

export interface PlayersResult {
  _id: UID;
  score: number;
}

export interface IGame {
  _id?: UID;
  type: GameType;
  owner?: UID;
  rounds: {
    _id?: UID;
    players: PlayersResult[];
  }[];
  createdAt?: string;
  updatedAt?: string;
}

export type ClientGame = Pick<IGame, '_id' | 'type'>;

export interface Round {
  _id: string;
  roundMembers: RoundMemberUUID[]; // RoundMember
  clientGame?: ClientGame;
  icon?: string;
  name: string;
  namePostfix: string;
}

export interface RoundWithTotal {
  _id: string;
  players: PlayersResult[];
}

export interface ResultRoundWithTotal extends RoundWithTotal {
  _id: 'result';
}

export interface RoundMember {
  _id: RoundMemberUUID;
  player: UID;
  scoresLine: number[];
  namedScoresLine?: NamedScore[];
}

export interface MessageDto<T> {
  playerId: UID;
  gameType: GameType;
  data: T;
}

export interface MessageThousandRound {
  lastScores: Pick<NamedScore, 'value' | 'name' | 'total'>;
}

export interface MessageFinishGame {
  score: string;
}

export interface RoundCfg {
  _id: string;
  icon: string;
  namePostfix: string;
  initialScoresLine: number[];
  initialNamedScoresLine?: NamedScore[];
}

export type PersistStore = {
  _id: GameType;
  players: IGamer[];
};

export interface NamedScore {
  name: string;
  value: number;
  picture?: string;
  total?: number;
}

export type RoundScoresNameType = 'r' | 's' | 'score';
export type RoundScoresOptionsType = 'r' | 's';
export type RoundScoresDisabledType = RoundScoresOptionsType[];
export type RoundScoresType = {
  [key: RoundMemberUUID]: {
    name: RoundScoresNameType;
    value: number;
    disabled: RoundScoresDisabledType;
    doubleZero: boolean;
    barrel: number;
  };
};

export interface RoundScores {
  [key: RoundMemberUUID]: number | string; // TODO: only number
}

export interface GameActionConfirmModalData {
  title: string;
  text: string;
  cancelBtnText: string;
  confirmBtnText: string;
}

export interface GameResultModalData {
  results: PlayersResult[];
  order: 1 | -1;
}

export interface CanDeactivateComponent {
  canDeactivate(): boolean;
}

// global
export const errors = [
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

export interface IErrorData extends ErrorBody, ErrorType {}

export type UID = string;

export enum UserRoles {
  Member = 'member',
  Guest = 'guest',
  Admin = 'admin',
}

export type Colors = 'red' | 'green' | 'blue' | 'black' | 'yellow';

export const gameTypes = ['rummy', 'uno', 'thousand', 'train'] as const;
export type GameType = typeof gameTypes[number];
