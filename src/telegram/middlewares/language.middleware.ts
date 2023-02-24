import { NextFunction } from 'express';

export async function languageMiddleware(
  ctx: any,
  next: NextFunction,
): Promise<void> {
  if (ctx.update.message) {
    ctx.language = ctx.update.message.from.language_code;
  }
  next();
}
