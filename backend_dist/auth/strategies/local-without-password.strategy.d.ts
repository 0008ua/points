import { Strategy } from 'passport-local';
import { IUserModel, UserDocument } from '../user.model';
declare const LocalWithoutPasswordStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalWithoutPasswordStrategy extends LocalWithoutPasswordStrategy_base {
    private userModel;
    constructor(userModel: IUserModel);
    validate(name: string, password: string): Promise<Pick<UserDocument, 'name' | 'role'>>;
}
export {};
