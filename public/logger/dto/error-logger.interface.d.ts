import { IErrorLog } from 'src/app.interfaces';
export interface IErrorLogger extends IErrorLog {
    owner: string;
}
