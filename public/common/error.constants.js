"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WRONG_CODE = exports.DB_ERROR = exports.INTERNAL_SERVER_ERROR = exports.WRONG_PASSWORD = exports.USER_NOT_FOUND = exports.NAME_EXIST = void 0;
const common_1 = require("@nestjs/common");
exports.NAME_EXIST = [
    'Name already exist',
    common_1.HttpStatus.FORBIDDEN,
];
exports.USER_NOT_FOUND = [
    'User not found',
    common_1.HttpStatus.FORBIDDEN,
];
exports.WRONG_PASSWORD = [
    'Wrong password',
    common_1.HttpStatus.FORBIDDEN,
];
exports.INTERNAL_SERVER_ERROR = [
    'Internal Server Error',
    common_1.HttpStatus.INTERNAL_SERVER_ERROR,
];
exports.DB_ERROR = ['DB Error', common_1.HttpStatus.BAD_REQUEST];
exports.WRONG_CODE = ['Wrong code', common_1.HttpStatus.BAD_REQUEST];
//# sourceMappingURL=error.constants.js.map