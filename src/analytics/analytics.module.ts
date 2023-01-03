import { Module } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { AnalyticsController } from './analytics.controller';
import { GameModule } from 'src/game/game.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Game, GameSchema } from 'src/game/entities/game.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Game.name, schema: GameSchema }])],
  providers: [AnalyticsService],
  controllers: [AnalyticsController],
})
export class AnalyticsModule {}
