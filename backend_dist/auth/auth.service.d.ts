import { UserModel, UserDocument } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { SignupDto } from './dto/signup.dto';
import { UserDataDto } from './dto/userData.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: UserModel, jwtService: JwtService);
    createUserData(user: UserDocument): UserDataDto;
    createUser(dto: SignupDto): Promise<UserDataDto>;
    createJwt(sub: any, prefix?: string, exp?: number): Promise<string>;
}
