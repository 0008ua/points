import { Injectable } from '@nestjs/common';
import { environment } from 'src/app.environment';
import { GamerService } from 'src/gamer/gamer.service';
import { MessageDto, MessageThousandRound } from '../dto/message.dto';
import { ComposeStrategy } from '../telegram.interface';

@Injectable()
export class ComposeThousandRoundStrategy
  implements ComposeStrategy<MessageThousandRound>
{
  environment = environment;
  constructor(private readonly gamerService: GamerService) {}

  async compose(
    messages: MessageDto<MessageThousandRound>[],
    lang: string,
  ): Promise<string> {
    const language = lang === 'uk' ? 'uk' : 'en';
    // telegram game
    const tg = this.environment[language].games[messages[0].gameType];
    // telegram common
    const tc = this.environment[language].common;
    let text = `<b>'${tg.name}' ${tc.round} ${tc.hasFinished}</b>\n${tc.results}:\n`;
    for (const [index, message] of messages.entries()) {
      const player = await this.gamerService.findOneAllData(message.playerId);
      text += `<i>${player.name}</i>: ${message.data.lastScores.total}\n`;
    }
    return text;
  }
}
