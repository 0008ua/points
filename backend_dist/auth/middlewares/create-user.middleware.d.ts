import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../auth.service';
export declare class CreateUserMiddleware implements NestMiddleware {
    private authService;
    constructor(authService: AuthService);
    use(req: Request, res: Response, next: NextFunction): void;
}
