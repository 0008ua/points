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
exports.AnalyticsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const game_entity_1 = require("../game/entities/game.entity");
let AnalyticsService = class AnalyticsService {
    constructor(gameModel) {
        this.gameModel = gameModel;
    }
    async getWins(userId) {
        return this.gameModel
            .aggregate([
            {
                $match: {
                    owner: userId,
                    type: 'train',
                },
            },
            {
                $unwind: {
                    path: '$rounds',
                },
            },
            {
                $match: {
                    'rounds._id': 'result',
                },
            },
            {
                $project: {
                    players: '$rounds.players',
                    _id: 0,
                },
            },
            {
                $project: {
                    max: {
                        $filter: {
                            input: '$players',
                            as: 'm',
                            cond: {
                                $eq: [
                                    '$$m.score',
                                    {
                                        $max: '$players.score',
                                    },
                                ],
                            },
                        },
                    },
                },
            },
            {
                $unwind: {
                    path: '$max',
                },
            },
            {
                $group: {
                    _id: {
                        $toObjectId: '$max._id',
                    },
                    count: {
                        $count: {},
                    },
                },
            },
            {
                $lookup: {
                    from: 'gamers',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'gamer',
                },
            },
            {
                $unwind: {
                    path: '$gamer',
                },
            },
            {
                $project: {
                    'rating.wins': '$count',
                    name: '$gamer.name',
                    color: '$gamer.color',
                },
            },
            {
                $sort: {
                    'rating.wins': -1,
                },
            },
        ])
            .then((game) => game)
            .catch((error) => new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST));
    }
    async getWinsToGames(userId) {
        return this.gameModel
            .aggregate([
            {
                $match: {
                    owner: userId,
                    type: 'train',
                },
            },
            {
                $unwind: {
                    path: '$rounds',
                },
            },
            {
                $match: {
                    'rounds._id': 'result',
                },
            },
            {
                $project: {
                    players: '$rounds.players',
                    _id: 0,
                },
            },
            {
                $facet: {
                    gamesCount: [
                        {
                            $unwind: {
                                path: '$players',
                            },
                        },
                        {
                            $group: {
                                _id: {
                                    $toObjectId: '$players._id',
                                },
                                count: {
                                    $sum: 1,
                                },
                            },
                        },
                        {
                            $lookup: {
                                from: 'gamers',
                                localField: '_id',
                                foreignField: '_id',
                                as: 'gamer',
                            },
                        },
                        {
                            $unwind: {
                                path: '$gamer',
                            },
                        },
                        {
                            $project: {
                                count: 1,
                                name: '$gamer.name',
                                color: '$gamer.color',
                            },
                        },
                    ],
                    wins: [
                        {
                            $project: {
                                max: {
                                    $filter: {
                                        input: '$players',
                                        as: 'm',
                                        cond: {
                                            $eq: [
                                                '$$m.score',
                                                {
                                                    $max: '$players.score',
                                                },
                                            ],
                                        },
                                    },
                                },
                            },
                        },
                        {
                            $unwind: {
                                path: '$max',
                            },
                        },
                        {
                            $group: {
                                _id: {
                                    $toObjectId: '$max._id',
                                },
                                count: {
                                    $count: {},
                                },
                            },
                        },
                    ],
                },
            },
            {
                $unwind: {
                    path: '$gamesCount',
                },
            },
            {
                $project: {
                    gamesCount: 1,
                    wins: {
                        $filter: {
                            input: '$wins',
                            as: 'm',
                            cond: {
                                $eq: ['$$m._id', '$gamesCount._id'],
                            },
                        },
                    },
                },
            },
            {
                $project: {
                    wins: {
                        $ifNull: [
                            {
                                $arrayElemAt: ['$wins', 0],
                            },
                            {
                                count: 0,
                            },
                        ],
                    },
                    gamesCount: 1,
                },
            },
            {
                $project: {
                    _id: '$gamesCount._id',
                    name: '$gamesCount.name',
                    color: '$gamesCount.color',
                    'rating.wins': '$wins.count',
                    'rating.gamesCount': '$gamesCount.count',
                    'rating.winsToGames': {
                        $round: [
                            {
                                $divide: ['$wins.count', '$gamesCount.count'],
                            },
                            2,
                        ],
                    },
                },
            },
            {
                $sort: {
                    'rating.winsToGames': -1,
                },
            },
        ])
            .then((game) => game)
            .catch((error) => new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST));
    }
    getRating(userId) {
        return this.gameModel
            .aggregate([
            {
                $match: {
                    owner: userId,
                    type: 'rummy',
                },
            },
            {
                $unwind: {
                    path: '$rounds',
                },
            },
            {
                $match: {
                    'rounds._id': 'result',
                },
            },
            {
                $project: {
                    players: '$rounds.players',
                    _id: 0,
                },
            },
            {
                $unwind: {
                    path: '$players',
                },
            },
            {
                $group: {
                    _id: {
                        $toObjectId: '$players._id',
                    },
                    totalGames: {
                        $count: {},
                    },
                    wins: {
                        $sum: {
                            $cond: [
                                {
                                    $gt: ['$players.score', 0],
                                },
                                1,
                                0,
                            ],
                        },
                    },
                    sum: {
                        $sum: '$players.score',
                    },
                },
            },
            {
                $lookup: {
                    from: 'gamers',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'gamer',
                },
            },
            {
                $unwind: {
                    path: '$gamer',
                },
            },
            {
                $project: {
                    'rating.wins': '$wins',
                    'rating.totalGames': '$totalGames',
                    'rating.scores': '$sum',
                    name: '$gamer.name',
                    color: '$gamer.color',
                },
            },
            {
                $sort: {
                    'rating.scores': -1,
                },
            },
        ])
            .then((game) => game)
            .catch((error) => new common_1.HttpException(error.message, common_1.HttpStatus.BAD_REQUEST));
    }
};
AnalyticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(game_entity_1.Game.name)),
    __metadata("design:paramtypes", [Object])
], AnalyticsService);
exports.AnalyticsService = AnalyticsService;
//# sourceMappingURL=analytics.service.js.map