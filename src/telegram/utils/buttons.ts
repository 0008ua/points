import { buttons } from 'src/app.environment';
import { Markup } from 'telegraf';

export const mainMenuButtons = Markup.keyboard([
  [buttons.subscribe, buttons.viewSubscribtions],
]).resize();

export const backMenuButtton = Markup.keyboard([buttons.back]).resize();

export const viewSubscriptionsMenuButtons = (
  btns: {
    text: string;
    data: string;
  }[],
) => {
  return Markup.inlineKeyboard(
    btns.map((btn) => [Markup.button.callback(btn.text, btn.data)]),
  );
};
