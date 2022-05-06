import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  mock: {},
  routes: routes,
  history: {
    type: 'browser',
  },
  alias: {},
});
