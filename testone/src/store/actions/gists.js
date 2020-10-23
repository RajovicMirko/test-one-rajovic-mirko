import axios from '../../utils/axios';

const encodeQueryData = (data) => {
  const query = [];
  for (let key in data){
    const value = encodeURIComponent(data[key]);
    if(value) query.push(encodeURIComponent(key) + '=' + value);
  }
  return query.join('&');
}

export const getGists = (pagination = null) => {
  return async (dispatch, getState) => {
    dispatch({ type: 'GET_GISTS' })

    let url = '/gists/public';
    const query = encodeQueryData(pagination);
    if(query) url += `?${query}`;

    const payload = await axios('get', url);

    if(payload.status < 400){
      dispatch({ type: 'GET_GISTS_SUCCESS', payload: payload.data});
    } else {
      dispatch({ type: 'GET_GISTS_ERROR' });
    }
  }
};