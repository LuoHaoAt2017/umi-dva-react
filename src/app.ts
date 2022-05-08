import dva from 'dva';
import moment from '@/libs/moment';

moment.prototype.pretty = function () {
  return this.format('YYYY/MM/DD HH:mm:ss');
};

const app = dva({
  onError(err: Error) {
    console.error(err.message);
  },
});
