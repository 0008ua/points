"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameTypes = exports.UserRoles = void 0;
const errors = [
    'unknownError',
    'analytics/error',
    'auth/error',
    'app/error',
    'ngrxDataError',
];
var UserRoles;
(function (UserRoles) {
    UserRoles["Member"] = "member";
    UserRoles["Guest"] = "guest";
    UserRoles["Admin"] = "admin";
})(UserRoles = exports.UserRoles || (exports.UserRoles = {}));
exports.gameTypes = ['rummy', 'uno', 'thousand', 'train'];
//# sourceMappingURL=app.interfaces.js.map