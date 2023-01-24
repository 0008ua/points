import { UserDocument } from '../entities/user.entity';
export type UserDataType = Pick<UserDocument, 'name' | 'role'> & {
    _id: string;
};
export interface UserDataDto extends UserDataType {
}
