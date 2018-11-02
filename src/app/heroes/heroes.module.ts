import {NgModule} from '@angular/core';
import {HeroesComponent} from './heroes.component';
import {CommonModule} from '@angular/common';
import {HeroesService} from './heroes.service';
import {FormsModule} from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  // Module
  imports: [
    RouterModule,
    FormsModule,
    CommonModule
  ],
  // Component(私有)
  declarations: [
    HeroesComponent,
    HeroDetailComponent
  ],
  // Module/Component
  exports: [
    HeroesComponent,
    HeroDetailComponent
  ],
  // service
  providers: [HeroesService]
})
export class HeroesModule { }
