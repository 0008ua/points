import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { UserDataDto } from '../dto/userData.dto';
import { UserModel } from '../entities/user.entity';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private userModel;
    readonly authService: AuthService;
    constructor(userModel: UserModel, authService: AuthService);
    validate(name: string, password: string): Promise<UserDataDto>;
}
export {};
