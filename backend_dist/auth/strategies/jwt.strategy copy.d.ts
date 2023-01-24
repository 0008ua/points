import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserModel } from '../user.model';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    readonly configService: ConfigService;
    constructor(configService: ConfigService);
    validate({ name }: Pick<UserModel, 'name'>): Promise<string>;
}
export {};
