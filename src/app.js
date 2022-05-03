import { GetMenus } from "@/apis/global";

export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      console.error(err.message);
    },
  },
};

export async function getInitialState() {
  const resp = await GetMenus();
  return {
    menus: resp.data
  };
}