import { Injectable } from '@nestjs/common';
import { environment } from 'src/app.environment';
import { GamerService } from 'src/gamer/gamer.service';
import { MessageDto } from '../dto/message.dto';
import { ComposeStrategy, MessageFinishGame } from '../telegram.interface';

@Injectable()
export class ComposeFinishGameStrategy
  implements ComposeStrategy<MessageFinishGame>
{
  environment = environment;
  constructor(private readonly gamerService: GamerService) {}

  async compose(
    messages: MessageDto<MessageFinishGame>[],
    lang: string,
  ): Promise<string> {
    const language = lang === 'uk' ? 'uk' : 'en';
    // telegram game
    const tg = this.environment[language].games[messages[0].gameType];
    // telegram common
    const tc = this.environment[language].common;
    let text = `<b>'${tg.name}' ${tc.game} ${tc.hasFinished}</b>\n${tc.results}:\n`;
    for (const [index, message] of messages.entries()) {
      const gamer = await this.gamerService.findOneAllData(message.playerId);
      text += `${index + 1}. <i>${gamer.name}</i>: ${message.data.score}\n`;
    }
    return text;
  }
}
