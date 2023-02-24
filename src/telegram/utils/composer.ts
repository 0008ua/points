import { environment } from 'src/app.environment';

export function getCmdText(cmd: string, ctx: any) {
  let lang = 'en';
  if (ctx.update.message) {
    lang = ctx.update.message.from.language_code === 'uk' ? 'uk' : 'en';
  }
  const { commands } = environment[lang];
  return commands[cmd];
}

export function getMsgText(msg: string, ctx: any) {
  let lang = 'en';
  if (ctx.update.message) {
    lang = ctx.update.message.from.language_code === 'uk' ? 'uk' : 'en';
  }

  const { messages } = environment[lang];
  return messages[msg];
}
