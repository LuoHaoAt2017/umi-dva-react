export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/Home/index',
      },
      {
        path: '/about',
        component: '@/pages/About/index',
      },
      {
        path: '/',
        redirect: '/about',
      },
    ],
  },
];
