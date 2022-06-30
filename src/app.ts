import { GetMenus } from '@/services/global';

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export async function getInitialState() {
  return {
    menus: [],
  };
}
