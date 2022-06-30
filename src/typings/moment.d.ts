declare module 'moment' {
  interface Moment extends Object {
    pretty(format?: string): string;
  }
}
