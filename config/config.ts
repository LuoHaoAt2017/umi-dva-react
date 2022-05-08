import { defineConfig } from 'umi';
import routes from './routes';
import chainWebpack from './webpack.config';

export default defineConfig({
  title: '试验场',
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
  chainWebpack: chainWebpack,
  devServer: {
    port: 9000,
  },
  headScripts: [
    'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
  ],
});
