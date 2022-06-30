export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        name: '首页',
        component: '@/pages/Home/index',
      },
      {
        path: '/about',
        name: '关于',
        component: '@/pages/About/index',
      },
      {
        path: '/Stark',
        name: '史塔克家族',
        component: '@/pages/Stark/index',
      },
      {
        path: '/Lannister',
        name: '兰尼斯特家族',
        component: '@/pages/Lannister/index',
      },
      {
        path: '/Baratheon',
        name: '拜拉席恩家族',
        component: '@/pages/Baratheon/index',
      },
      {
        path: '/Targaryen',
        name: '坦格利安家族',
        component: '@/pages/Targaryen/index',
      },
      {
        path: '/Martell',
        name: '马泰尔家族',
        component: '@/pages/Martell/index',
      },
      {
        path: '/Tully',
        name: '徒利家族',
        component: '@/pages/Tully/index',
      },
      {
        path: '/Ayrrn',
        name: '艾林家族',
        component: '@/pages/Ayrrn/index',
      },
      {
        path: '/Tyrell',
        name: '提利尔家族',
        component: '@/pages/Tyrell/index',
      },
      {
        path: '/Greyjoy',
        name: '葛雷乔伊家族',
        component: '@/pages/Greyjoy/index',
      },
      {
        path: '/',
        redirect: '/Greyjoy',
      },
    ],
  },
];
