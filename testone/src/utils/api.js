const testApiUrl = (apiUrl) => {
  const pattern = /^\//;
  return pattern.test(apiUrl);
}

const encodeQueryData = (data) => {
  const query = Object.keys(data)
    .reduce((result, key) => {
      if(!data[key]) return result;

      const valueUri = encodeURIComponent(data[key]);
      if(valueUri) return result + (`${encodeURIComponent(key)}=${valueUri} `);
      return result;
    }, '?');

  if(query.length <= 1) return '';
  return query.trim().replace(' ', '&');
}

export const getApiUrl = (apiUrl, query = null) => {
  if(typeof apiUrl !== 'string') throw Error('getApiUrl: apiUrl argument must be of type string');
  if(!apiUrl) throw Error('getApiUrl: apiUrl argument must have value');
  if(!testApiUrl(apiUrl)) throw Error('getApiUrl: apiUrl argument must start with "/" character');
  
  const baseURL = process.env.REACT_APP_GIST_API_URL;

  if(!!query){
    const queryStr = encodeQueryData(query);
    const result = baseURL + apiUrl + queryStr;
    return result;
  }

  return apiUrl;
}