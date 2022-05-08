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
        path: '/',
        redirect: '/about',
      },
    ],
  },
];
