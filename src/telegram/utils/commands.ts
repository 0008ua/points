import { backMenuButtton, mainMenuButtons } from './buttons';
import { getCmdText } from './composer';

export const startCmd = async (ctx) =>
  await ctx.reply(getCmdText('welcome', ctx), { ...mainMenuButtons });

export const backCmd = async (ctx) =>
  await ctx.reply(getCmdText('getBack', ctx), { ...mainMenuButtons });

export const onSubscribeSceneCmd = async (ctx) =>
  await ctx.reply(getCmdText('enterCode', ctx), { ...backMenuButtton });

export const onViewSubscribtionsCmd = async (ctx) =>
  await ctx.reply(getCmdText('viewSubscribtions', ctx), {
    ...backMenuButtton,
  });
