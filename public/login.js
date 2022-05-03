window.onload = function () {
  const { Button, Form, Input } = window.antd;
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }

    login() {
      sessionStorage.setItem(
        'userInfo',
        JSON.stringify({
          logined: true,
          userId: '123456789',
        }),
      );
      window.open(`${window.origin}/index.html`, '_self');
    }

    render() {
      if (this.state.liked) {
        return 'You liked this.';
      }
      const h = React.createElement;
      return h(
        Form,
        {
          className: 'container',
        },
        [
          h(
            Form.Item,
            {
              label: 'Username',
            },
            [h(Input)],
          ),
          h(
            Form.Item,
            {
              label: 'Password',
            },
            [h(Input)],
          ),
          h(
            Form.Item,
            {
              label: 'Password',
            },
            [h(Input)],
          ),
          h(
            Form.Item,
            {
              wrapperCol: { offset: 8 },
            },
            [
              h(
                Button,
                {
                  type: 'primary',
                  onClick: () => this.login(),
                },
                'Login',
              ),
              h(Button, {}, 'Register'),
            ],
          ),
        ],
      );
    }
  }

  const root = ReactDOM.createRoot(document.getElementById('app'));
  root.render(React.createElement(App));
};
