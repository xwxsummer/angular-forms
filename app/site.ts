export class Site {
  constructor(
    public id: number,
    public name: string,
    public url: string,
    public alexa?: number
  ) {  }
}
// 标为 public 的为公有字段，alexa 后添加一个问号(?)表示可选字段。