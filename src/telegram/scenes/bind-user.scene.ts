import { Scene, SceneEnter, Ctx, On, Hears } from 'nestjs-telegraf';
import { buttons } from 'src/app.environment';
import { BIND_USER } from '../telegram.constants';
import { SceneContext } from '../telegram.interface';
import { TelegramService } from '../telegram.service';
import { backCmd, onSubscribeSceneCmd } from '../utils/commands';
import { getMsgText } from '../utils/composer';

@Scene(BIND_USER)
export class BindUserScene {
  constructor(protected telegramService: TelegramService) {}

  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: SceneContext) {
    onSubscribeSceneCmd(ctx);
  }

  @Hears(buttons.back)
  async hearsReturn(@Ctx() ctx: any) {
    await ctx.scene.leave();
    backCmd(ctx);
  }

  @On('text')
  async onText(@Ctx() ctx: any) {
    try {
      await this.telegramService.subscribeToBot({
        telegramId: ctx.from.id,
        telegramSubscriptionName: ctx.from.first_name,
        telegramCheckCode: ctx.message.text,
      });
      await ctx.reply(getMsgText('subscribeSuccess', ctx));
    } catch (error) {
      await ctx.reply(getMsgText('subscribeError', ctx) + ' ' + error.message);
      // throw error;
    }
    await ctx.scene.leave();
    backCmd(ctx);
  }
}
