import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(readonly analyticsService: AnalyticsService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('get-wins')
  getWins(@Req() req: Request) {
    return this.analyticsService.getWins(req.user._id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-wins-to-games')
  getWinsToGames(@Req() req: Request) {
    return this.analyticsService.getWinsToGames(req.user._id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get-rating')
  async getRating(@Req() req: Request) {
    const rating = await this.analyticsService.getRating(req.user._id);
    return rating;
  }
}
