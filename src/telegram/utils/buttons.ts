import { Markup } from 'telegraf';
import { BUTTON_TEXT } from '../telegram.constants';

export const mainMenuButtons = Markup.keyboard([
  BUTTON_TEXT.subscribe,
]).resize();
export const backMenuButtton = Markup.keyboard([BUTTON_TEXT.back]).resize();

export const startCmd = async (ctx) =>
  await ctx.reply('Welcome', { ...mainMenuButtons });
export const backCmd = async (ctx) =>
  await ctx.reply('You back to main menu', { ...mainMenuButtons });
export const onSubscribeSceneCmd = async (ctx) =>
  await ctx.reply('Enter code', { ...backMenuButtton });
