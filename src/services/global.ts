import request from '@/utils/request';

export const GetMenus = () => {
  return request.get('/api/menus');
};

export const GetDepts = (query: string) => {
  return request.get('/api/depts', {
    method: 'GET',
    params: {
      query,
    },
  });
};
