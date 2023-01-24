import { UserDocument } from '../entities/user.entity';
export type UserForFrontDto = Pick<UserDocument, 'name' | 'role'> & {
    _id: string;
    iat?: number;
    exp?: number;
};
