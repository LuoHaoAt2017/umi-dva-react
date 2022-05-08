import { extend } from 'umi-request';

const request = extend({
  timeout: 1000,
});

request.interceptors.request.use((url, options) => {
  return {
    url,
    options,
  };
});

request.interceptors.response.use((response, options) => {
  return response;
});

export default request;
