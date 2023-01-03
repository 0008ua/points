import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game, GameModel } from 'src/game/entities/game.entity';

@Injectable()
export class AnalyticsService {
  constructor(@InjectModel(Game.name) readonly gameModel: GameModel) {}
  getWins(userId: string) {
    this.gameModel
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
      .then((game: any) => game)
      .catch((error: any) => new HttpException(error.message, HttpStatus.BAD_REQUEST));
  }

  getWinsToGames(userId: string) {
    this.gameModel
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
      .then((game: any) => game)
      .catch((error: any) => new HttpException(error.message, HttpStatus.BAD_REQUEST));
  }

  getRating(userId: string) {
    this.gameModel
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
      .then((game: any) => game)
      .catch((error: any) => new HttpException(error.message, HttpStatus.BAD_REQUEST));
  }
}
