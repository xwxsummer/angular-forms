"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Site = (function () {
    function Site(id, name, url, alexa) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.alexa = alexa;
    }
    return Site;
}());
exports.Site = Site;
// 标为 public 的为公有字段，alexa 后添加一个问号(?)表示可选字段。 
//# sourceMappingURL=site.js.map