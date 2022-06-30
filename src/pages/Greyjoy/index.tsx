import { useRequest } from 'ahooks';
import { message, Table, Input, Button, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { GetDepts } from '@/services/global';

import styles from './index.less';
import { useState } from 'react';

export default function Greyjoy() {
  const [data, setData] = useState<any[]>([]);
  const { loading, run } = useRequest(
    (query: string) => {
      return GetDepts(query)
        .then(function (res) {
          if (res.successful) {
            return Promise.resolve(
              res.data.map((x, i) => ({
                ...x,
                index: i,
                key: x.uuid,
              })),
            );
          } else {
            return Promise.resolve([]);
          }
        })
        .catch(function (err) {
          message.error(err.message);
          return Promise.reject([]);
        });
    },
    {
      manual: true, // 不会默认执行，需要通过 run 或者 runAsync 来触发执行
      onSuccess: (res) => {
        setData(res);
      },
      onError: () => {
        setData([]);
      },
    },
  );

  const cols = [
    {
      key: 'index',
      title: '序号',
      dataIndex: 'index',
      width: 60,
    },
    {
      key: 'title',
      title: '名称',
      dataIndex: 'name',
      ellipsis: true,
    },
  ];

  return (
    <div>
      <h1 className={styles.title}>强取胜于苦耕</h1>
      <Input
        addonBefore={<SearchOutlined />}
        addonAfter={
          <Button.Group>
            <Space>
              <Button>搜索</Button>
              <Button>清空</Button>
            </Space>
          </Button.Group>
        }
        onPressEnter={(evt: any) => {
          run(evt.target.value);
        }}
      />
      <Table columns={cols} dataSource={data} loading={loading} />
    </div>
  );
}
