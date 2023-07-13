import { Controller, UseGuards } from '@nestjs/common';
import { Get, Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body, Query, Req } from '@nestjs/common/decorators/http/route-params.decorator';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserRoles } from 'src/auth/entities/user.entity';
import { HasRoles, RolesGuard } from 'src/auth/guards/roles.guard';
import { ErrorLogQueryDto } from './dto/error-log-query.dto';
import { ErrorLogCreateDto } from './dto/error-log.-createdto';
import { OwnerQueryDto } from './dto/owner.dto';
import { ErrorLogger } from './entities/error-logger.entity';
import { LoggerService } from './logger.service';

@Controller('logger')
export class LoggerController {
  constructor(readonly loggerService: LoggerService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('log-error-to-db')
  logErrorToDB(@Req() { user }: Request, @Body() dto: ErrorLogCreateDto) {
    // console.log('user', user)
    const errorLogger: ErrorLogger = { ...dto, owner: user._id };
    return this.loggerService.logErrorToDB(errorLogger);
  }
  @HasRoles(UserRoles.Admin)
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Get('get-owners-with-query')
  getOwnersWithQuery(@Query() query: OwnerQueryDto) {
    return this.loggerService.getOwnersWithQuery(query);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-with-query')
  getWithQuery(@Query() query: ErrorLogQueryDto, @Req() { user }: Request) {
    console.log('query', query);
    return this.loggerService.getWithQuery(query, user._id);
  }
}
