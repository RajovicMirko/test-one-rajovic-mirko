export const error = (error) => {
  return async (dispatch, getState, { Api }) => {
    dispatch({ type: 'ERROR', error })
  }
}

export const clearError = () => {
  return async (dispatch, getState, { Api }) => {
    dispatch({ type: 'ERROR_CLEAR' })
  }
}
