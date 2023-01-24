import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { UserDataDto } from '../dto/userData.dto';
import { UserModel } from '../entities/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userModel;
    readonly configService: ConfigService;
    readonly authService: AuthService;
    constructor(userModel: UserModel, configService: ConfigService, authService: AuthService);
    validate(userData: UserDataDto & {
        exp: number;
        iat: number;
    }): Promise<UserDataDto>;
}
export {};
