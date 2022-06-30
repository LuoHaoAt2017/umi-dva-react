import Mock, { Random } from 'mockjs';

Random.extend({
  uuid() {
    return Random.guid();
  },
  title() {
    return Random.cparagraph();
  },
});

export default {
  '/api/depts': (req, res) => {
    const query = req.query.query;
    let list = Mock.mock({
      'list|1000': [
        {
          uuid: '@uuid',
          name: '@title',
        },
      ],
    }).list;
    if (!!query) {
      list = list.filter((x) => x.name.includes(query));
    }
    setTimeout(function () {
      res.send({
        data: list,
        successful: true,
      });
    }, 500);
  },
  '/api/users': (req, res) => {
    res.send({
      data: [],
      successful: true,
    });
  },
  '/api/roles': (req, res) => {
    res.send({
      data: [],
      successful: true,
    });
  },
};
