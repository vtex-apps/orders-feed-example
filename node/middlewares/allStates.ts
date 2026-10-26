export async function allStates(
  ctx: StatusChangeContext,
  next: () => Promise<unknown>
) {
  ctx.vtex.logger.info(ctx.body)
  await next()
}
