import dva from 'dva';

const app = dva({
  onError(err: Error) {
    console.error(err.message);
  },
});
