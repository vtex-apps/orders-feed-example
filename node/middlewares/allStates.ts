export const allStates = async (
  { body }: StatusChangeContext,
  next: () => Promise<unknown>
) => {
  console.log('allStates', body) // eslint-disable-line no-console
  return next()
}
