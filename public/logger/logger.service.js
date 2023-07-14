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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const error_logger_entity_1 = require("./entities/error-logger.entity");
let LoggerService = class LoggerService {
    constructor(errorLoggerModel) {
        this.errorLoggerModel = errorLoggerModel;
    }
    async logErrorToDB(errorLogger) {
        console.log('errorLogger', errorLogger);
        return this.normalizeErrorDocument(await this.errorLoggerModel.createErrorLogger(errorLogger));
    }
    async getOwnersWithQuery(query) {
        return (await this.errorLoggerModel.aggregate([
            {
                $group: {
                    _id: null,
                    owner: {
                        $addToSet: '$owner',
                    },
                },
            },
            {
                $unwind: {
                    path: '$owner',
                },
            },
            {
                $addFields: {
                    owner: {
                        $toObjectId: '$owner',
                    },
                },
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'owner',
                    foreignField: '_id',
                    as: 'result',
                },
            },
            {
                $project: {
                    owner: '$owner',
                    _id: 0,
                    name: {
                        $arrayElemAt: ['$result', 0],
                    },
                },
            },
            {
                $project: {
                    owner: 1,
                    name: '$name.name',
                },
            },
            {
                $sort: {
                    name: 1,
                },
            },
            {
                $match: {
                    name: { $regex: query.name ? '^(?i)' + query.name : '^' },
                },
            },
            {
                $facet: {
                    data: [
                        {
                            $skip: Number(query.skip) || 0,
                        },
                        {
                            $limit: Number(query.limit) || 10,
                        },
                    ],
                    total: [
                        {
                            $count: 'total',
                        },
                    ],
                },
            },
            {
                $project: {
                    data: 1,
                    totalDocuments: {
                        $arrayElemAt: ['$total', 0],
                    },
                },
            },
            {
                $project: {
                    data: 1,
                    totalDocuments: '$totalDocuments.total',
                },
            },
        ]))[0];
    }
    async getWithQuery(query, userId) {
        const { owner, errorType, skip = 0, limit = 5 } = query;
        let errorLoggerDocuments;
        console.log('query', query);
        try {
            const normalizedQuery = Object.assign({ skip, limit }, !owner ? null : { owner }, !errorType ? null : { errorType });
            console.log('normalizedQuery', normalizedQuery);
            errorLoggerDocuments = await this.errorLoggerModel
                .find(normalizedQuery)
                .skip(skip)
                .limit(limit);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST);
        }
        return this.normalizeErrorDocument(errorLoggerDocuments);
    }
    normalizeErrorDocument(doc) {
        if (Array.isArray(doc)) {
            return doc.map((item) => {
                const { message, error, errorType, owner, _id, createdAt } = item;
                return {
                    message,
                    error,
                    errorType,
                    owner,
                    _id,
                    createdAt,
                };
            });
        }
        const { message, error, errorType, owner, _id, createdAt } = doc;
        return {
            message,
            error,
            errorType,
            owner,
            _id,
            createdAt,
        };
    }
};
LoggerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(error_logger_entity_1.ErrorLogger.name)),
    __metadata("design:paramtypes", [Object])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map