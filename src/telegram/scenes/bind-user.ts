import {
  Scene,
  SceneEnter,
  SceneLeave,
  Command,
  Ctx,
  On,
  Action,
  Hears,
} from 'nestjs-telegraf';
import { Markup } from 'telegraf';
import { BIND_USER, BUTTON_TEXT } from '../telegram.constants';
import { SceneContext } from '../telegram.interface';
import {
  backCmd,
  mainMenuButtons,
  onSubscribeSceneCmd,
} from '../utils/buttons';

@Scene(BIND_USER)
export class BindUserScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: SceneContext) {
    onSubscribeSceneCmd(ctx);
  }
  @Hears(BUTTON_TEXT.back)
  async hearsReturn(@Ctx() ctx: any) {
    await ctx.scene.leave();
    backCmd(ctx);
  }

  // @Action('return')
  // async onReturn(@Ctx() ctx: any) {
  //   await ctx.scene.leave();
  // }

  @On('text')
  async onText(@Ctx() ctx: any) {
    // check code and save user to db
    await ctx.reply('Ваш код ' + ctx.message.text);
    await ctx.reply('Ваш id ' + ctx.from.id);
    await ctx.scene.leave();
    backCmd(ctx);
  }

  // @On('message')
  // async onMessage(@Ctx() ctx: SceneContext) {
  //   console.log('message', ctx.message);
  // }

  // @SceneLeave()
  // onSceneLeave(): string {
  //   console.log('Leave from scene');
  //   return 'Bye Bye 👋';
  // }

  @Command(['rng', 'random'])
  onRandomCommand(): number {
    console.log('Use "random" command');
    return Math.floor(Math.random() * 11);
  }

  @Command('leave')
  async onLeaveCommand(ctx: SceneContext): Promise<void> {
    await ctx.scene.leave();
  }
}
