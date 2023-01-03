import { Module } from '@nestjs/common';
import { GamerService } from './gamer.service';
import { GamerController } from './gamer.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Gamer, GamerSchema } from './entities/gamer.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: Gamer.name, schema: GamerSchema }])],
  controllers: [GamerController],
  providers: [GamerService],
})
export class GamerModule {}
