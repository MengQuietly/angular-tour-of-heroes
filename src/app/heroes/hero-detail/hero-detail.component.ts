import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../heroes.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // 子 -> 当前，父 -> 其他；
  // @Input()：指令的值绑定，将父作用域的值“输入”到子作用域中，然后子作用域进行相关处理（在其他html 中使用[变量名]访问）。
  // @Output()：指令的方法绑定,子作用域触发事件,相当于将事件“输出到”父作用域中，在父作用域中处理（在其他 html 中使用 (eventName)访问）。
  // @Input() hero: Hero;

  hero: Hero;
  constructor(private route: ActivatedRoute,
              private heroService: HeroesService,
              private location: Location) { }

  ngOnInit() {
    this.getHero();
  }
  getHero() {
    // 获取路由参数
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroService.getHero(id);
  }
  goBack() {
    // 路由回退
    this.location.back();
  }

}
