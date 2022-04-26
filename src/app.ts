import dva from 'dva';
interface Route {
  path: string;
  name: string;
  exact: boolean;
  component: string;
}

let dynamicRoutes: Route[] = [];
const prefix = './pages';

const app = dva({
  onError(err: Error) {
    console.error(err.message);
  },
});

export function patchRoutes({ routes }: { routes: Route[] }) {
  console.log('patchRoutes: ', routes);
  dynamicRoutes = dynamicRoutes.map((elem) => ({
    ...elem,
    exact: true,
    component: require(`${prefix}${elem.path}`).default,
  }));
  routes.unshift(...dynamicRoutes);
}

export function render(oldRender: Function) {
  const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{}');
  console.log('render', userInfo);
  fetch('/api/routes')
    .then((res) => res.json())
    .then((res) => {
      dynamicRoutes = res.routes;
      oldRender();
    });
}
