import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {HeroesService} from './heroes.service';
import {MessageService} from '../message/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero;
  // heroes = HEROES;
  heroes = [];
  selectedHero: Hero;
  // constructor(注入依赖类)
  constructor(private heroesService: HeroesService, private messageService: MessageService) {
  }
  // ngOnInit() { 初始化,只调用一次 }；
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    this.messageService.add('addMsg【点击了' + hero.name + '】。');
  }
  getHeroes() {
     this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  getHero(id: number) {
    this.heroesService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.selectedHero = this.heroesService.getHero(id);
    this.messageService.add('addMsg【点击了' + this.selectedHero.name + '】。');
  }
}
