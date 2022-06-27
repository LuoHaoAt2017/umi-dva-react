import { ReactDOM, ReactNode, useEffect, useState } from 'react';
import { Row, Col, message, Skeleton, Tree, Tooltip, Select } from 'antd';
import { request } from 'umi';
import { v4 as uuidv4 } from 'uuid';
import { useRequest } from 'ahooks';
import { XMLBuilder, XMLParser, XMLValidator } from 'fast-xml-parser';
import { SwapOutlined } from '@ant-design/icons';

import styles from './index.less';

const AttriListKey = ':@';
const CommentKey = '#comment';

interface DataNode {
  title: string | ReactNode;
  key: string;
  children: DataNode[];
}

function fetchXML(): Promise<{ data: any; mesg: string; success: boolean }> {
  return new Promise(function (resolve, reject) {
    request('/api/xml')
      .then(function (res) {
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      });
  });
}

function formatTree(tree) {
  const node: DataNode = { key: uuidv4(), title: '', children: [] };
  const keys = Object.keys(tree);
  // 注释节点 | 元素节点 | 属性节点
  if (keys.indexOf(CommentKey) > -1) {
    node.key = uuidv4();
    node.title = commentNode(tree[CommentKey]);
    node.children = [];
    return node;
  }
  if (keys.indexOf(AttriListKey) > -1) {
    node.key = uuidv4();
    const key = keys[0] === AttriListKey ? keys[1] : keys[0];
    const attrs = tree[AttriListKey];
    node.title = elementNode(key, attrs);
    const children = tree[key];
    for (let i = 0; i < children.length; i++) {
      if (children[i]) {
        const target = formatTree(children[i]);
        target && node.children.push(target);
      }
    }
    return node;
  }
  return null;
}

function formatStrs(strs) {
  if (!strs) {
    return `""`;
  }
  return strs;
}

function getAllKeys(root, keys) {
  if (!root) {
    return '';
  }
  keys.push(root.key);
  const children = root.children;
  for (let i = 0; i < children.length; i++) {
    getAllKeys(children[i], keys);
  }
}

// 注释节点
const commentNode = (node) => {
  return (
    <div className={styles.commentNode}>
      {node
        .map((elem) => elem['#text'])
        .map((text, i) => (
          <span key={i}>{`<!--${text}-->`}</span>
        ))}
    </div>
  );
};

const options = [
  { label: 'P001', value: 'P001' },
  { label: 'P002', value: 'P002' },
  { label: 'P003', value: 'P003' },
];

// 元素节点
const elementNode = (title, attr) => {
  const keys = Object.keys(attr);
  return (
    <div className={styles.elementNode}>
      <Tooltip
        overlayStyle={{
          maxWidth: '1440px',
          minWidth: '480px',
        }}
        title={
          <>
            <Row align="middle" style={{ width: '100%', color: '#000000' }}>
              <Col span={10}>{title}</Col>
              <Col span={2}>
                <SwapOutlined />
              </Col>
              <Col span={12}>
                <Select options={options} style={{ width: '200px' }} />
              </Col>
            </Row>
          </>
        }
        color="#ffffff"
      >
        <span>{'<'}</span>
        <span style={{ paddingRight: 8 }}>{title}</span>
        <span>
          {keys.map((key, index) => (
            <span key={index} style={{ paddingRight: 8 }}>
              {key}={formatStrs(attr[key])}
            </span>
          ))}
        </span>
        <span>{'/>'}</span>
      </Tooltip>
    </div>
  );
};

export default function About() {
  // 请求 xml 文件资源
  // 校验 xml 文件资源
  // 解析 xml 文件资源（注释 | 属性）
  // 展示 xml 文件资源
  const [expandedKeys, setExpandedKeys] = useState<string[]>([]);
  const [treeData, setTreeData] = useState<DataNode[]>([]);
  const { loading } = useRequest(fetchXML, {
    onSuccess: (res: { data: any; mesg: string }) => {
      const result = XMLValidator.validate(res.data as string, {
        allowBooleanAttributes: true,
      });
      if (result !== true) {
        return message.error('XML文件不符合规范');
      }
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: '',
        attributesGroupName: '',
        allowBooleanAttributes: true,
        alwaysCreateTextNode: true,
        commentPropName: CommentKey,
        ignoreDeclaration: true,
        preserveOrder: true,
        removeNSPrefix: false,
        trimValues: true,
      });
      const output = parser.parse(res.data as string);
      const treeNode = formatTree(output[0]);
      if (!treeNode) {
        return;
      }
      const keys: string[] = [];
      setTreeData([treeNode]);
      getAllKeys(treeNode, keys);
      setExpandedKeys(keys);
    },
    onError: (error) => {
      message.error(error.message);
    },
  });
  if (loading) {
    return <Skeleton />;
  }
  return (
    <div className={styles.container}>
      <Tree
        treeData={treeData}
        showLine={true}
        autoExpandParent={false}
        expandedKeys={expandedKeys}
        onExpand={(keys: any[]) => {
          setExpandedKeys([...keys]);
        }}
      ></Tree>
    </div>
  );
}
