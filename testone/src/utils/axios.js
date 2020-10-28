import axios from 'axios';

const http = (method = null, url = null, data = null) => {
  const request = {};
  if(method) request['method'] = method;
  if(url) request['url'] = url;
  if(data) request['data'] = data;

  return axios(request);
};

export default http;