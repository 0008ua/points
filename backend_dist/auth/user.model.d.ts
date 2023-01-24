/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ModelDefinition } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { UserForFrontDto } from './dto/userForFront.dto';
export declare enum UserRole {
    Member = "member",
    Guest = "guest"
}
export declare class User {
    name: string;
    password: string;
    role: UserRole;
}
export type UserDocument = HydratedDocument<User>;
export type UserModel = Model<UserDocument>;
export interface IUserModel extends UserModel {
    findUserByIdAndUpdateTimestamp(_id: string): Promise<UserDocument>;
    isNameUnique(name: string): Promise<true>;
    isNameExist(name: string): Promise<UserDocument>;
    isPasswordMatched(candidatePassword: string, userFromDb: UserDocument): Promise<UserForFrontDto>;
    createUser(user: User): Promise<any>;
}
export declare const UserSchema: import("mongoose").Schema<User, Model<User, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User>;
export declare const userModel: ModelDefinition;
