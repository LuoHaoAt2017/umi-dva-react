import { useRequest, useToggle } from 'ahooks';
import { message, Table, Input, Button, Select } from 'antd';
import {
  SearchOutlined,
  ClearOutlined,
  RollbackOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { GetDepts } from '@/services/global';

import styles from './index.less';
import { useEffect, useState } from 'react';

const options = [
  {
    label: '冬瓜',
    value: '0001',
  },
  {
    label: '西瓜',
    value: '0002',
  },
  {
    label: '南瓜',
    value: '0003',
  },
];

export default function Greyjoy() {
  const [data, setData] = useState<any[]>([]);
  const [option, setOpts] = useState<string>('');
  const { loading, run, refresh, cancel } = useRequest(
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
      // ready: true, // manual=true 手动请求模式时，只要 ready=false，则通过 run/runAsync 触发的请求都不会执行。
      manual: true, // 不会默认执行，需要通过 run 或者 runAsync 来触发执行
      // defaultParams: [''], // options.manual = false。
      // loadingDelay: 300, // 可以延迟 loading 变成 true 的时间
      // pollingInterval: 6000,
      // pollingErrorRetryCount: 3,
      // pollingWhenHidden: false,
      // refreshDeps: [option],
      // refreshOnWindowFocus: true,
      retryCount: 3, // 在失败后会进行重试，指定错误重试次数
      onBefore: () => {},
      onSuccess: (res) => {
        setData(res);
      },
      onError: () => {
        setData([]);
      },
      onFinally: () => {},
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

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <h1 className={styles.title}>强取胜于苦耕</h1>
      <Input
        addonBefore={
          <Select
            options={options}
            value={option}
            placeholder="请选择适用范围"
            style={{
              width: 150,
            }}
            onChange={(val) => {
              setOpts(val);
            }}
          />
        }
        suffix={
          <Button.Group>
            <Button icon={<SearchOutlined />} onClick={refresh}>
              搜索
            </Button>
            <Button icon={<ReloadOutlined />} onClick={() => run('')}>
              刷新
            </Button>
            <Button icon={<ClearOutlined />}>清空</Button>
            <Button icon={<RollbackOutlined onClick={cancel} />}>取消</Button>
          </Button.Group>
        }
        onPressEnter={(evt: any) => {
          run(evt.target.value);
        }}
      />
      <Table
        columns={cols}
        dataSource={data}
        loading={loading}
        size="middle"
        bordered
      />
    </>
  );
}
