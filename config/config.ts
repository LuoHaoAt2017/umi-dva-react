import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mock: {},
  routes: routes,
  dva: {
    immer: true,
    hmr: false,
  },
  history: {
    type: 'hash',
  },
  alias: {},
});
