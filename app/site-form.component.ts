import { Component } from '@angular/core';
import { Site }    from './site';
 
@Component({
  moduleId: module.id,
  selector: 'site-form',
  templateUrl: 'site-form.component.html'
})
export class SiteFormComponent {
  urls = ['www.runoob.com', 'www.google.com',
            'www.taobao.com', 'www.facebook.com'];
  model = new Site(1, '菜鸟教程', this.urls[0], 10000);
  submitted = false;
  onSubmit() { this.submitted = true; }
  // TODO: 完成后移除
  get diagnostic() { return JSON.stringify(this.model); }

  active = true;
newSite() {
  this.model = new Site(5, '', '');
  this.active = false;
  setTimeout(() => this.active = true, 0);
//   我们给组件添加一个 active 标记，把它初始化为 true 。当我们添加一个新的网站时，
//   它把 active 标记设置为 false ， 然后通过一个快速的 setTimeout 函数迅速把它设置回 true 。
}
}
// 实例中导入了 Component 装饰器和 Site 模型。
// @Component 选择器 "site-form" 表示我们可以通过一个 <site-form> 标签，把此表单扔进父模板中。
// templateUrl 属性指向一个独立的HTML模板文件，名叫 site-form.component.html。
// diagnostic 属性用于返回这个模型的JSON形式。