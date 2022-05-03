export default {
  'GET /api/routes': function (_, res: any) {
    res.status(200).send({
      routes: [
        {
          path: '/Stark',
          name: '史塔克家族',
        },
        {
          path: '/Lannister',
          name: '兰尼斯特家族',
        },
        {
          path: '/Baratheon',
          name: '拜拉席恩家族',
        },
        {
          path: '/Targaryen',
          name: '坦格利安家族',
        },
        {
          path: '/Martell',
          name: '马泰尔家族',
        },
        {
          path: '/Tully',
          name: '徒利家族',
        },
        {
          path: '/Ayrrn',
          name: '艾林家族',
        },
        {
          path: '/Tyrell',
          name: '提利尔家族',
        },
        {
          path: '/Greyjoy',
          name: '葛雷乔伊家族',
        },
      ],
    });
  },
};
