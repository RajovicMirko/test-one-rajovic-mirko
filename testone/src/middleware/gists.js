import axios from '../utils/axios';
import { getApiUrl } from '../utils/api';

export default (() => {
  const apiUrl = '/gists/public';

  const get = async (query) => await axios('get', getApiUrl(apiUrl, query));

  return { get }
})();
