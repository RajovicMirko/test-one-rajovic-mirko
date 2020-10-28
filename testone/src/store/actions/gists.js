export const getGists = (pagination = null) => {
  return async (dispatch, getState, { Api }) => {
    dispatch({ type: 'GET_GISTS' })

    try {
      const payload = await Api.gists.get(pagination);

      if(payload.status < 400){
        dispatch({ type: 'GET_GISTS_SUCCESS', payload: payload.data});
      } else {
        dispatch({ type: 'GET_GISTS_ERROR' });
      } 
    } catch (error) {
      dispatch({
        type: 'ERROR',
        error: {
          type: 'Getting Gists',
          message: 'Error while getting data from server'
        }
      });
    }
  }
};