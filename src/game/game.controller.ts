import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  Req,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { Game } from './entities/game.entity';
import { TelegramService } from 'src/telegram/telegram.service';
import { MessageDto } from 'src/telegram/dto/message.dto';
import { ComposeFinishGameStrategy } from 'src/telegram/composers/compose-finish-game.strategy';
import { MessageFinishGame } from 'src/telegram/telegram.interface';

@Controller(['store/game', 'store/games'])
export class GameController {
  constructor(
    private readonly gameService: GameService,
    private readonly telegramService: TelegramService,
  ) {}

  // add
  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() dto: CreateGameDto, @Req() { user }: Request) {
    // throw new HttpException('error add game to back', HttpStatus.BAD_REQUEST);

    const newGame: Game = { ...dto, owner: user._id };
    const messages: MessageDto<MessageFinishGame>[] = dto.rounds
      .find((round) => round._id === 'result')
      .players.map((player) => ({
        gameType: dto.type,
        playerId: player._id,
        data: { score: String(player.score) },
      }));

    this.telegramService.broadcast<MessageFinishGame>(messages, ComposeFinishGameStrategy);

    return this.gameService.create(newGame);
  }

  // getWithQuery
  @UseGuards(AuthGuard('jwt'))
  @Get()
  getWithQuery(@Query() query: any, @Req() { user }: Request) {
    if (Object.keys(query).length === 0) {
      return this.gameService.getAll(user._id);
    }
    return this.gameService.getWithQuery(query, user._id);
  }

  // getById
  @UseGuards(AuthGuard('jwt'))
  @Get(':_id')
  findOne(@Param('_id') _id: string, @Req() { user }: Request) {
    return this.gameService.findOne(_id, user._id);
  }

  // update
  @UseGuards(AuthGuard('jwt'))
  @Put(':_id')
  update(@Param('_id') _id: string, @Body() dto: UpdateGameDto, @Req() { user }: Request) {
    return this.gameService.update(_id, dto, user._id);
  }

  // remove
  @UseGuards(AuthGuard('jwt'))
  @Delete(':_id')
  remove(@Param('_id') _id: string, @Req() { user }: Request) {
    return this.gameService.remove(_id, user._id);
  }
}
