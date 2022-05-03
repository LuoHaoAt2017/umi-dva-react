export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/Home/index'
      },
      {
        path: '/about',
        component: '@/pages/About/index'
      },
      {
        path: '/:province',
        component: '@/components/Entry/index'
      },
      {
        path: '/:province/:city',
        component: '@/components/Entry/index'
      },
      {
        path: '/:province/:city/:county',
        component: '@/components/Entry/index'
      },
      {
        path: '/',
        redirect: '/about'
      },
    ]
  },
];