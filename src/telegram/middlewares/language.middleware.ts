import { NextFunction } from 'express';

export async function languageMiddleware(
  ctx: any,
  next: NextFunction,
): Promise<void> {
  ctx.language = ctx.update.message.from.language_code;
  next();
}
