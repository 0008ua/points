import { Request } from 'express';
import { AuthService } from './auth.service';
import { SignupDto } from './dto/signup.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signin({ user }: Request): Promise<string>;
    signup(dto: SignupDto): Promise<string>;
    protected(req: Request): any;
}
