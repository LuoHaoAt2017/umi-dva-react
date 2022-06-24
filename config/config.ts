import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  title: '实践是检验理论的好方式',
  fastRefresh: {},
  routes: routes,
  history: {
    type: 'browser',
  },
  devServer: {
    port: 9000,
  },
});
