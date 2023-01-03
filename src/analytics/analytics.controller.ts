import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(readonly analyticsService: AnalyticsService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('get-wins')
  getWins(@Req() req: Request) {
    return this.analyticsService.getWins(req.user._id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('get-wins-to-games')
  getWinsToGames(@Req() req: Request) {
    return this.analyticsService.getWinsToGames(req.user._id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('get-rating')
  getRating(@Req() req: Request) {
    return this.analyticsService.getRating(req.user._id);
  }
}
