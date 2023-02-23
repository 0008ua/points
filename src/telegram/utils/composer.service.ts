import { Injectable } from '@nestjs/common';
import { environment } from 'src/app.environment';
import { GamerService } from 'src/gamer/gamer.service';
import {
  MessageFinishGameDto,
  MessageThousandRoundDto,
} from '../dto/message.dto';
import { TelegramService } from '../telegram.service';

@Injectable()
export class ComposerService {
  environment = environment;
  constructor(private readonly gamerService: GamerService) {}

  async composeFinishGameMessage(
    messages: MessageFinishGameDto[],
    lang: string,
  ): Promise<string> {
    const language = lang === 'uk' ? 'uk' : 'en';
    const tg = this.environment[language].games[messages[0].gameType];
    const tc = this.environment[language].common;
    let text = `<b>'${tg.name}' ${tc.game} ${tc.hasFinished}</b>\n${tc.results}:\n`;
    for (const [index, message] of messages.entries()) {
      const gamer = await this.gamerService.findOneAllData(message.playerId);
      text += `${index + 1}. <i>${gamer.name}</i>: ${message.score}\n`;
    }
    return text;
  }

  async composeMessageThousandRound(
    messages: MessageThousandRoundDto[],
    lang: string,
  ): Promise<string> {
    const language = lang === 'uk' ? 'uk' : 'en';
    const tg = this.environment[language].games[messages[0].gameType];
    const tc = this.environment[language].common;
    let text = `<b>'${tg.name}' ${tc.round} ${tc.hasFinished}</b>\n${tc.results}:\n`;
    for (const [index, message] of messages.entries()) {
      const player = await this.gamerService.findOneAllData(message.playerId);
      text += `<i>${player.name}</i>: ${message.lastScores.total}\n`;
    }
    return text;
  }
}
