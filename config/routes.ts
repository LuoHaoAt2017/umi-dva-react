export default [
  {
    path: '/',
    component: '@/layouts',
    routes: [
      {
        path: 'home',
        name: 'Home',
        component: '@/pages/Home',
        routes: [
          {
            path: 'success',
            name: 'Home Success',
            component: '@/pages/Home/success',
          },
          {
            path: 'failure',
            name: 'Home Failure',
            component: '@/pages/Home/failure',
          },
          {
            path: '.',
            redirect: 'success',
          },
        ],
      },
      {
        path: '/about',
        name: 'About',
        component: '@/pages/About',
        routes: [
          {
            path: '/about/success',
            name: 'About Success',
            component: '@/pages/About/success',
          },
          {
            path: '/about/failure',
            name: 'About Failure',
            component: '@/pages/About/failure',
          },
          {
            path: '/about',
            redirect: '/about/success',
          },
        ],
      },
      {
        path: '/',
        redirect: '/home',
      },
    ],
  },
];
