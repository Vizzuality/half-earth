// Middleware merges a global static app state into the local data
export const mergeAppState = store => {
  return next => baseAction => {
    const __app = Object.freeze(store.getState())
    const basePayload = baseAction.payload
    if (!basePayload) return next(baseAction)

    const actionFailed = baseAction.error || baseAction.payload instanceof Error
    const message = baseAction.payload.message || baseAction.payload.toString()
    const status = baseAction.payload.status || -1
    if (actionFailed) baseAction.error = { message, status }
    const payload =
      typeof basePayload === 'object'
        ? { ...basePayload, __app }
        : { payload: basePayload, __app }
    return next({ ...baseAction, ...payload })
  }
}
