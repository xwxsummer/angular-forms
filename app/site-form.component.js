"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var site_1 = require("./site");
var SiteFormComponent = (function () {
    function SiteFormComponent() {
        this.urls = ['www.runoob.com', 'www.google.com',
            'www.taobao.com', 'www.facebook.com'];
        this.model = new site_1.Site(1, '菜鸟教程', this.urls[0], 10000);
        this.submitted = false;
        this.active = true;
    }
    SiteFormComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(SiteFormComponent.prototype, "diagnostic", {
        // TODO: 完成后移除
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    SiteFormComponent.prototype.newSite = function () {
        var _this = this;
        this.model = new site_1.Site(5, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
        //   我们给组件添加一个 active 标记，把它初始化为 true 。当我们添加一个新的网站时，
        //   它把 active 标记设置为 false ， 然后通过一个快速的 setTimeout 函数迅速把它设置回 true 。
    };
    return SiteFormComponent;
}());
SiteFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'site-form',
        templateUrl: 'site-form.component.html'
    })
], SiteFormComponent);
exports.SiteFormComponent = SiteFormComponent;
// 实例中导入了 Component 装饰器和 Site 模型。
// @Component 选择器 "site-form" 表示我们可以通过一个 <site-form> 标签，把此表单扔进父模板中。
// templateUrl 属性指向一个独立的HTML模板文件，名叫 site-form.component.html。
// diagnostic 属性用于返回这个模型的JSON形式。 
//# sourceMappingURL=site-form.component.js.map