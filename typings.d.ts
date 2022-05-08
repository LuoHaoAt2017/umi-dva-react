// import { message } from 'antd';

declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

// 声明语句中只能定义类型，禁止在声明语句中定义具体的实现。

// 定义全局变量
declare const $: (selector: string) => any; // 没有定义一个全部变量，而是声明了一个全局变量的类型
// 定义全局函数
declare function jQuery(selector: string): any;
declare function jQuery(callback: () => any): any;
// 定义全局类
declare class Animal {
  name: string;
  constructor(name: string);
  sayHello(): void;
}
// 全局枚举
