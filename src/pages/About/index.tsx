import { useEffect, useLayoutEffect } from 'react';
import { Button, Collapse, message } from '@/libs/ant-design';
import moment from '@/libs/moment';
import { CloseCircleOutlined } from '@ant-design/icons';

import styles from './index.less';

message.customSuccess = function (content) {
  message.success({
    content: (
      <>
        {content}
        <CloseCircleOutlined
          style={{ marginLeft: 10 }}
          onClick={() => {
            message.destroy();
          }}
        />
      </>
    ),
  });
};

export default function About() {
  useLayoutEffect(() => {}, []);
  return (
    <div className={styles.container}>
      <Collapse>
        <Collapse.Panel key={1} header="拓展 antd message 的类型">
          <Button
            onClick={() => {
              message.customSuccess('Hello World');
            }}
          >
            Click
          </Button>
        </Collapse.Panel>
        <Collapse.Panel key={2} header="声明一个全局变量的类型">
          <div id="yes"></div>
          <Button
            onClick={() => {
              if ($('#yes').text()) {
                $('#yes').text('');
              } else {
                jQuery('#yes').text('hello world');
              }
            }}
          >
            Click
          </Button>
        </Collapse.Panel>
        <Collapse.Panel
          key={3}
          header="区分 useEffect 和 useLayoutEffect"
        ></Collapse.Panel>
        <Collapse.Panel key={4} header="在 moment 上拓展一个方法 pretty">
          {moment().pretty()}
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}
