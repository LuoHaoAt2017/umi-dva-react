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
      'list|10000': [
        {
          uuid: '@uuid',
          name: '@title',
        },
      ],
    }).list;
    if (!!query) {
      list.filter((x) => x.name.includes(query));
    }
    res.send({
      data: list,
      req: req,
      successful: true,
    });
  },
  '/api/users': (req, res) => {
    res.send({
      data: [
        {
          pageCode: 'data-center',
          pageName: 'DataCenter',
          parent: '',
        },
        {
          pageCode: 'config-center',
          pageName: 'ConfigCenter',
          parent: '',
        },
        {
          pageCode: 'integrated',
          pageName: 'Integrated',
          parent: '',
        },
      ],
      successful: true,
    });
  },
  '/api/roles': (req, res) => {
    res.send({
      data: [
        {
          pageCode: 'data-center',
          pageName: 'DataCenter',
          parent: '',
        },
        {
          pageCode: 'config-center',
          pageName: 'ConfigCenter',
          parent: '',
        },
        {
          pageCode: 'integrated',
          pageName: 'Integrated',
          parent: '',
        },
      ],
      successful: true,
    });
  },
};
