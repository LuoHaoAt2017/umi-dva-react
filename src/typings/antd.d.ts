/// <reference path="../../node_modules/antd/es/message/index.d.ts" />

// 拓展第三方模块的声明文件
// declare module 'message' {
//   export interface MessageApi {
//     customSuccess(param: any): void;
//   }
// }

export interface MessageApi {
  customSuccess(param: any): void;
}
