import axios from '../utils/axios';
import { getApiUrl } from '../utils/api';

export default (() => {
  const get = async (query) => {
    const url = getApiUrl('/gists/public', query);
    return await axios('get', url)
  };

  return {
    get
  }
})();
