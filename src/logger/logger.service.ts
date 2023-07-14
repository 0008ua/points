import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ErrorLogQueryDto } from './dto/error-log-query.dto';
import { ErrorLoggerDocumentDto } from './dto/error-loger-document.dto';
import { OwnerDataDto, OwnerQueryDto } from './dto/owner.dto';
import {
  ErrorLogger,
  ErrorLoggerDocument,
  ErrorLoggerModel,
} from './entities/error-logger.entity';

@Injectable()
export class LoggerService {
  constructor(
    @InjectModel(ErrorLogger.name) readonly errorLoggerModel: ErrorLoggerModel,
  ) {}
  async logErrorToDB(errorLogger: ErrorLogger): Promise<ErrorLoggerDocumentDto> {
    console.log('errorLogger', errorLogger);
    return this.normalizeErrorDocument(
      await this.errorLoggerModel.createErrorLogger(errorLogger),
    );
  }

  async getOwnersWithQuery(query: OwnerQueryDto): Promise<OwnerDataDto> {
    return (
      await this.errorLoggerModel.aggregate([
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
      ])
    )[0];
  }

  async getWithQuery(
    query: ErrorLogQueryDto,
    userId: string,
  ): Promise<ErrorLoggerDocumentDto[]> {
    const { owner, errorType, skip = 0, limit = 5 } = query;
    let errorLoggerDocuments: ErrorLoggerDocument[];
    console.log('query', query);

    try {
      const normalizedQuery = Object.assign(
        { skip, limit },
        !owner ? null : { owner },
        !errorType ? null : { errorType },
      );
      console.log('normalizedQuery', normalizedQuery);
      errorLoggerDocuments = await this.errorLoggerModel
        .find(normalizedQuery)
        .skip(skip)
        .limit(limit);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
    return this.normalizeErrorDocument(errorLoggerDocuments);
  }

  private normalizeErrorDocument(doc: ErrorLoggerDocument): ErrorLoggerDocumentDto;
  private normalizeErrorDocument(doc: ErrorLoggerDocument[]): ErrorLoggerDocumentDto[];
  private normalizeErrorDocument(
    doc: any | any[],
  ): ErrorLoggerDocumentDto | ErrorLoggerDocumentDto[] {
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
}
