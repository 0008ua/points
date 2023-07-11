"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorJournalController = void 0;
const common_1 = require("@nestjs/common");
const app_interfaces_1 = require("../app.interfaces");
const error_journal_service_1 = require("./error-journal.service");
let ErrorJournalController = class ErrorJournalController {
    constructor(errorJournalService) {
        this.errorJournalService = errorJournalService;
    }
    getWithQuery(query, { user }) {
        return this.errorJournalService.getWithQuery(query, user._id);
    }
};
__decorate([
    (0, common_1.Get)('get-with-query'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof app_interfaces_1.ErrorJournalQueryDto !== "undefined" && app_interfaces_1.ErrorJournalQueryDto) === "function" ? _a : Object, Object]),
    __metadata("design:returntype", void 0)
], ErrorJournalController.prototype, "getWithQuery", null);
ErrorJournalController = __decorate([
    (0, common_1.Controller)('error-journal'),
    __metadata("design:paramtypes", [error_journal_service_1.ErrorJournalService])
], ErrorJournalController);
exports.ErrorJournalController = ErrorJournalController;
//# sourceMappingURL=error-journal.controller.js.map