import request from '@/utils/request';

export const GetMenus = () => {
  return request.get("/api/menus");
}