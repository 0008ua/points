import { Scene, SceneEnter, Ctx, On, Hears } from 'nestjs-telegraf';
import { VIEW_SUBSCRIBTIONS } from '../telegram.constants';
import { SceneContext } from '../telegram.interface';
import { TelegramService } from '../telegram.service';
import { backCmd, onViewSubscribtionsCmd } from '../utils/commands';

import { viewSubscriptionsMenuButtons } from '../utils/buttons';
import { buttons } from 'src/app.environment';
import { getMsgText } from '../utils/composer';

@Scene(VIEW_SUBSCRIBTIONS)
export class ViewSubscribtionsScene {
  constructor(protected telegramService: TelegramService) {}

  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: any) {
    onViewSubscribtionsCmd(ctx);
    const telegramId = String(ctx.from.id);
    const subscribtions = await this.telegramService.getSubscribtions(
      telegramId,
    );
    if (!subscribtions.length) {
      ctx.reply(getMsgText('noSubscribtionsYet', ctx));
      this.hearsReturn(ctx);
    } else {
      const buttons = subscribtions.map((sub) => ({
        text: `${getMsgText('unsubscribe', ctx)} '${sub.name}' (${getMsgText(
          'user',
          ctx,
        )}: ${sub.ownerName})`,
        data: sub._id,
      }));

      ctx.reply(
        getMsgText('subscriptions', ctx) + ': ',
        viewSubscriptionsMenuButtons(buttons),
      );
    }
  }

  @Hears(buttons.back)
  async hearsReturn(@Ctx() ctx: any) {
    await ctx.scene.leave();
    backCmd(ctx);
  }

  @On('callback_query')
  async onAction(@Ctx() ctx: any) {
    const gamerId = ctx.callbackQuery.data;
    try {
      await this.telegramService.unsubscribeFromBot(gamerId);
      await ctx.reply(getMsgText('unsubscribeSuccess', ctx));

      await ctx.answerCbQuery();
    } catch (error) {
      await ctx.reply(getMsgText('subscribeError', ctx) + ' ' + error.message);

      await ctx.answerCbQuery();
      // throw error;
    }
    this.hearsReturn(ctx);
  }
}
