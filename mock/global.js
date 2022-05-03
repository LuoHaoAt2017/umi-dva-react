
export default {
  "/api/menus": (req, res) => {
    res.send({
      data: [{
        pageCode: 'data-center',
        pageName: 'DataCenter',
        parent: ''
      }, {
        pageCode: 'config-center',
        pageName: 'ConfigCenter',
        parent: ''
      }, {
        pageCode: 'integrated',
        pageName: 'Integrated',
        parent: ''
      }],
      successful: true
    });
  }
}