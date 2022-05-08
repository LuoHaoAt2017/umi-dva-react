export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: 'home',
        name: 'Home',
        component: '@/pages/Home',
      },
      {
        path: '/about',
        name: 'About',
        component: '@/pages/About',
      },
      {
        path: '/:province',
        component: '@/components/Entry/index',
      },
      {
        path: '/:province/:city',
        component: '@/components/Entry/index',
      },
      {
        path: '/:province/:city/:county',
        component: '@/components/Entry/index',
      },
      {
        path: '/',
        redirect: '/about',
      },
    ],
  },
];
